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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "235",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2012",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "Date","(","2012",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "Date","(","2012",", ","2",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "238",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "286",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "IdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IdesOfMarch",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Year",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","Year",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Month",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Month",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "month from " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Day",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","Day",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "day from " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "IdesOfMarch" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "IdesOfMarch",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "ImpreciseIdesOfMarch",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseIdesOfMarch",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "248",
                        "value" : [ "Date","(","2000",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "259",
            "name" : "ImpreciseComponentTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseComponentTuple",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "value" : [ "Tuple {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Year",": " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "year from " ]
                           }, {
                              "r" : "262",
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
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "month from " ]
                           }, {
                              "r" : "265",
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
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "day from " ]
                           }, {
                              "r" : "268",
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
               "localId" : "277",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "278",
                  "name" : "Year",
                  "elementType" : {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "280",
                  "name" : "Month",
                  "elementType" : {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "282",
                  "name" : "Day",
                  "elementType" : {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "260",
               "type" : "Tuple",
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
               "element" : [ {
                  "name" : "Year",
                  "value" : {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "263",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "262",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Month",
                  "value" : {
                     "localId" : "264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Month",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "266",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "265",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               }, {
                  "name" : "Day",
                  "value" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Day",
                     "type" : "DateTimeComponentFrom",
                     "signature" : [ {
                        "localId" : "269",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "268",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "name" : "ImpreciseIdesOfMarch",
                        "type" : "ExpressionRef"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "NullDate",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","NullDate",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "year from " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "r" : "289",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "290",
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
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DateTimeComponentFrom",
               "signature" : [ {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "290",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "555",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","NotSameYear",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " ","same year as"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","NotSameMonth",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
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
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonthWrongYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","SameMonthWrongYear",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "359",
                        "value" : [ " ","same month as"," " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "Date","(","2001",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "389",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "394",
                  "s" : [ {
                     "value" : [ "","define ","NotSameDay",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "403",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "419",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "415",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "418",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayWrongMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","SameDayWrongMonth",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","same day as"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "450",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "435",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "436",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "427",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "447",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "454",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "463",
                        "s" : [ {
                           "r" : "455",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "479",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "r" : "467",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "463",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "464",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "465",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "466",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "455",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "456",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "476",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "467",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "468",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "469",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","NotSame",": " ]
                  }, {
                     "r" : "509",
                     "s" : [ {
                        "r" : "493",
                        "s" : [ {
                           "r" : "485",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "509",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "505",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "509",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "493",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "505",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "506",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "507",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "497",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "499",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "528",
                     "s" : [ {
                        "r" : "515",
                        "value" : [ "null"," ","same as"," " ]
                     }, {
                        "r" : "524",
                        "s" : [ {
                           "r" : "516",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "528",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "530",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "531",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "529",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "524",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "525",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "526",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "527",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "516",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "518",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "534",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "534",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "550",
                     "s" : [ {
                        "r" : "543",
                        "s" : [ {
                           "r" : "535",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "550",
                        "value" : [ " ","same as"," " ]
                     }, {
                        "r" : "547",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "547",
                           "s" : [ {
                              "r" : "548",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "549",
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
               "localId" : "550",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "551",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "552",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "543",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "544",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "545",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "546",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "535",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "536",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "537",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "547",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "548",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "549",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "555",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "555",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "560",
                     "s" : [ {
                        "r" : "556",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "556",
                           "s" : [ {
                              "r" : "557",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "558",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "560",
                        "value" : [ " ","same as"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "560",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameAs",
               "signature" : [ {
                  "localId" : "562",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "563",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "556",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "557",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "558",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "561",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "559",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "785",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ","same year or after"," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
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
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "359",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "389",
                        "value" : [ " ","same month or after"," " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "394",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "403",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "419",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "415",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "418",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "450",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "435",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "436",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "427",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "447",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "454",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "463",
                        "s" : [ {
                           "r" : "455",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "479",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "r" : "467",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "463",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "464",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "465",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "466",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "455",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "456",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "476",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "467",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "468",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "469",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "509",
                     "s" : [ {
                        "r" : "493",
                        "s" : [ {
                           "r" : "485",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "509",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "505",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "509",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "493",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "505",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "506",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "507",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "497",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "499",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "539",
                     "s" : [ {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "539",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "535",
                        "s" : [ {
                           "r" : "527",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "539",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "541",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
               }, {
                  "localId" : "535",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "537",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "538",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "528",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "529",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "544",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "544",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "569",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "r" : "545",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "569",
                        "value" : [ " ","same or after"," " ]
                     }, {
                        "r" : "565",
                        "s" : [ {
                           "r" : "557",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "569",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "570",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "571",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "554",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "565",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "566",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "567",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "568",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "574",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "574",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "599",
                     "s" : [ {
                        "r" : "583",
                        "s" : [ {
                           "r" : "575",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "599",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "595",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "599",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "600",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "601",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "583",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "585",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "586",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "576",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "577",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "589",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "604",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "604",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "629",
                     "s" : [ {
                        "r" : "613",
                        "s" : [ {
                           "r" : "605",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "629",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "625",
                        "s" : [ {
                           "r" : "617",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "629",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "630",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "631",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "613",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "614",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "615",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "616",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "605",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "606",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "607",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "625",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "626",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "627",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "628",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "619",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "634",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "634",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "659",
                     "s" : [ {
                        "r" : "643",
                        "s" : [ {
                           "r" : "635",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "659",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "655",
                        "s" : [ {
                           "r" : "647",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "659",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "660",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "661",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "643",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "644",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "645",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "646",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "635",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "636",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "637",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "655",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "647",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "648",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "649",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "664",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "664",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "686",
                     "s" : [ {
                        "r" : "673",
                        "s" : [ {
                           "r" : "665",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "686",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "683",
                        "s" : [ {
                           "r" : "677",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "686",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "687",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "688",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "673",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "674",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "675",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "676",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "665",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "666",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "667",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "683",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "684",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "685",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "691",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "691",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "713",
                     "s" : [ {
                        "r" : "700",
                        "s" : [ {
                           "r" : "692",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "713",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "710",
                        "s" : [ {
                           "r" : "704",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "713",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "714",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "715",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "700",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "701",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "702",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "703",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "692",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "693",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "694",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "710",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "711",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "712",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "704",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "705",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "718",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "718",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "740",
                     "s" : [ {
                        "r" : "727",
                        "s" : [ {
                           "r" : "719",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "740",
                        "value" : [ " ","same day or after"," " ]
                     }, {
                        "r" : "737",
                        "s" : [ {
                           "r" : "731",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "740",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
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
                  "localId" : "727",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "728",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "729",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "730",
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
                  }
               }, {
                  "localId" : "737",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "738",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "739",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "731",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "732",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "745",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "745",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "759",
                     "s" : [ {
                        "r" : "746",
                        "value" : [ "null"," ","same or after"," " ]
                     }, {
                        "r" : "755",
                        "s" : [ {
                           "r" : "747",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "759",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "761",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "762",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "760",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "746",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "755",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "747",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "748",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "749",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "765",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "765",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "779",
                     "s" : [ {
                        "r" : "774",
                        "s" : [ {
                           "r" : "766",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "779",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "779",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "781",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "782",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "774",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "775",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "776",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "777",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "766",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "767",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "768",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "780",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "778",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "785",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "785",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "790",
                     "s" : [ {
                        "r" : "786",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "786",
                           "s" : [ {
                              "r" : "787",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "788",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "790",
                        "value" : [ " ","same or after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "790",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrAfter",
               "signature" : [ {
                  "localId" : "792",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "793",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "786",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "787",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "788",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "791",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "789",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "785",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ","same year or before"," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
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
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "359",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "389",
                        "value" : [ " ","same month or before"," " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "394",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "403",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "419",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "415",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "418",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "450",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "435",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "436",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "427",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "447",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "454",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "463",
                        "s" : [ {
                           "r" : "455",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "479",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "r" : "467",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "463",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "464",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "465",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "466",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "455",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "456",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "476",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "467",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "468",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "469",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "509",
                     "s" : [ {
                        "r" : "493",
                        "s" : [ {
                           "r" : "485",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "509",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "505",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "509",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "493",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "505",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "506",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "507",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "497",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "499",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "539",
                     "s" : [ {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "539",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "535",
                        "s" : [ {
                           "r" : "527",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "539",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "541",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "535",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "537",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "538",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "528",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "529",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "544",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "544",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "569",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "r" : "545",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "569",
                        "value" : [ " ","same or before"," " ]
                     }, {
                        "r" : "565",
                        "s" : [ {
                           "r" : "557",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "569",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "570",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "571",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "554",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "565",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "566",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "567",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "568",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "574",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "574",
                  "s" : [ {
                     "value" : [ "","define ","SameDayMonthBefore",": " ]
                  }, {
                     "r" : "599",
                     "s" : [ {
                        "r" : "583",
                        "s" : [ {
                           "r" : "575",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "599",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "595",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","4",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "599",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "600",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "601",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "583",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "585",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "586",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "576",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "577",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "589",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "604",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfterMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "604",
                  "s" : [ {
                     "value" : [ "","define ","DayAfterMonthBefore",": " ]
                  }, {
                     "r" : "629",
                     "s" : [ {
                        "r" : "613",
                        "s" : [ {
                           "r" : "605",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "629",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "625",
                        "s" : [ {
                           "r" : "617",
                           "value" : [ "Date","(","2000",", ","4",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "629",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "630",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "631",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "613",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "614",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "615",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "616",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "605",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "606",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "607",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "625",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "626",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "627",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "628",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "619",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "634",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBeforeMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "634",
                  "s" : [ {
                     "value" : [ "","define ","DayBeforeMonthAfter",": " ]
                  }, {
                     "r" : "659",
                     "s" : [ {
                        "r" : "643",
                        "s" : [ {
                           "r" : "635",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "659",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "655",
                        "s" : [ {
                           "r" : "647",
                           "value" : [ "Date","(","2000",", ","2",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "659",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "660",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "661",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "643",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "644",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "645",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "646",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "635",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "636",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "637",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "655",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "647",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "648",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "649",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "664",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "664",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "686",
                     "s" : [ {
                        "r" : "673",
                        "s" : [ {
                           "r" : "665",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "686",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "683",
                        "s" : [ {
                           "r" : "677",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "686",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "687",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "688",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "673",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "674",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "675",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "676",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "665",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "666",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "667",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "683",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "684",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "685",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "691",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "691",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "713",
                     "s" : [ {
                        "r" : "700",
                        "s" : [ {
                           "r" : "692",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "713",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "710",
                        "s" : [ {
                           "r" : "704",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "713",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "714",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "715",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "700",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "701",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "702",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "703",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "692",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "693",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "694",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "710",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "711",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "712",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "704",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "705",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "718",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "718",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "740",
                     "s" : [ {
                        "r" : "727",
                        "s" : [ {
                           "r" : "719",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "740",
                        "value" : [ " ","same day or before"," " ]
                     }, {
                        "r" : "737",
                        "s" : [ {
                           "r" : "731",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "740",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
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
                  "localId" : "727",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "728",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "729",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "730",
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
                  }
               }, {
                  "localId" : "737",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "738",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "739",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "731",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "732",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "745",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "745",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "759",
                     "s" : [ {
                        "r" : "746",
                        "value" : [ "null"," ","same or before"," " ]
                     }, {
                        "r" : "755",
                        "s" : [ {
                           "r" : "747",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "759",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "761",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "762",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "760",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "746",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "755",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
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
                  } ],
                  "year" : {
                     "localId" : "747",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "748",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "749",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "765",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "765",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "779",
                     "s" : [ {
                        "r" : "774",
                        "s" : [ {
                           "r" : "766",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "779",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "779",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "781",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "782",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "774",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "775",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "776",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "777",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "766",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "767",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "768",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "780",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "778",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "785",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "785",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "790",
                     "s" : [ {
                        "r" : "786",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "786",
                           "s" : [ {
                              "r" : "787",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "788",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "790",
                        "value" : [ " ","same or before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "790",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "SameOrBefore",
               "signature" : [ {
                  "localId" : "792",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "793",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "786",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "787",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "788",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "791",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "789",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "695",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "Date","(","2000",", ","12",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ","after year of"," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "After",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
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
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "359",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "Date","(","2000",", ","3",", ","25",")" ]
                        } ]
                     }, {
                        "r" : "389",
                        "value" : [ " ","after month of"," " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "After",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "25",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "394",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "403",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "419",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "415",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "418",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "450",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "435",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "436",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "427",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "447",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "454",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "463",
                        "s" : [ {
                           "r" : "455",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "479",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "r" : "467",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "463",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "464",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "465",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "466",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "455",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "456",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "476",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "467",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "468",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "469",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "509",
                     "s" : [ {
                        "r" : "493",
                        "s" : [ {
                           "r" : "485",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "509",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "505",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "509",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "493",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "505",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "506",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "507",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "497",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "499",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "539",
                     "s" : [ {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     }, {
                        "r" : "539",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "535",
                        "s" : [ {
                           "r" : "527",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "539",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "541",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
                     "value" : "16",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "535",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "537",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "538",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "528",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "529",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "544",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "544",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "569",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "r" : "545",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "569",
                        "value" : [ " ","after"," " ]
                     }, {
                        "r" : "565",
                        "s" : [ {
                           "r" : "557",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "569",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "570",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "571",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "554",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "565",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "566",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "567",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "568",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "574",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "574",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "596",
                     "s" : [ {
                        "r" : "583",
                        "s" : [ {
                           "r" : "575",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "596",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "593",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "596",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "597",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "598",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "583",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "585",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "586",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "576",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "577",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "593",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "594",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "595",
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
                  }
               } ]
            }
         }, {
            "localId" : "601",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "601",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "623",
                     "s" : [ {
                        "r" : "610",
                        "s" : [ {
                           "r" : "602",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "623",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "620",
                        "s" : [ {
                           "r" : "614",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "623",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "624",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "625",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "604",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "620",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "621",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "622",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "615",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "628",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "628",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "650",
                     "s" : [ {
                        "r" : "637",
                        "s" : [ {
                           "r" : "629",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "650",
                        "value" : [ " ","after day of"," " ]
                     }, {
                        "r" : "647",
                        "s" : [ {
                           "r" : "641",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "650",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "After",
               "signature" : [ {
                  "localId" : "651",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "652",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "637",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "629",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "630",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "631",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "647",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "648",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "649",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "641",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "642",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "655",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "655",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "669",
                     "s" : [ {
                        "r" : "656",
                        "value" : [ "null"," ","after"," " ]
                     }, {
                        "r" : "665",
                        "s" : [ {
                           "r" : "657",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "669",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "671",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "672",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "670",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "656",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "665",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "666",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "657",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "658",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "659",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "675",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "675",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "689",
                     "s" : [ {
                        "r" : "684",
                        "s" : [ {
                           "r" : "676",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "689",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "689",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "691",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "692",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "684",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "685",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "686",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "687",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "676",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "677",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "690",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "688",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "695",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "695",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "700",
                     "s" : [ {
                        "r" : "696",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "696",
                           "s" : [ {
                              "r" : "697",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "698",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "700",
                        "value" : [ " ","after"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "700",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "After",
               "signature" : [ {
                  "localId" : "702",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "703",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "696",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "697",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "698",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "701",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "699",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "695",
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
            "name" : "SameYear",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","SameYear",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "239",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "Date","(","2000",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
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
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","YearAfter",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "269",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "Date","(","1999",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "253",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1999",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "YearBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","YearBefore",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "Date","(","2000",", ","10",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "299",
                        "value" : [ " ","before year of"," " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "r" : "287",
                           "value" : [ "Date","(","2001",", ","11",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Year",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2001",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "11",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameMonth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","SameMonth",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "313",
                        "s" : [ {
                           "r" : "305",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "325",
                        "s" : [ {
                           "r" : "317",
                           "value" : [ "Date","(","2000",", ","3",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
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
                  "localId" : "313",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "325",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","MonthAfter",": " ]
                  }, {
                     "r" : "359",
                     "s" : [ {
                        "r" : "343",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "359",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "Date","(","2000",", ","2",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "359",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "361",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "364",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "364",
                  "s" : [ {
                     "value" : [ "","define ","MonthBefore",": " ]
                  }, {
                     "r" : "389",
                     "s" : [ {
                        "r" : "373",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "Date","(","2000",", ","3",", ","22",")" ]
                        } ]
                     }, {
                        "r" : "389",
                        "value" : [ " ","before month of"," " ]
                     }, {
                        "r" : "385",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Date","(","2000",", ","4",", ","23",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "389",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Month",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "373",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "22",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "23",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "SameDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "394",
                  "s" : [ {
                     "value" : [ "","define ","SameDay",": " ]
                  }, {
                     "r" : "419",
                     "s" : [ {
                        "r" : "403",
                        "s" : [ {
                           "r" : "395",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "419",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "415",
                        "s" : [ {
                           "r" : "407",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "419",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "420",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "403",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "395",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "415",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "417",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "418",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "407",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "409",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "424",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","DayAfter",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "r" : "433",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "449",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "445",
                        "s" : [ {
                           "r" : "437",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "449",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "450",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "451",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "435",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "436",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "427",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "445",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "447",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "439",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "454",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DayBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "454",
                  "s" : [ {
                     "value" : [ "","define ","DayBefore",": " ]
                  }, {
                     "r" : "479",
                     "s" : [ {
                        "r" : "463",
                        "s" : [ {
                           "r" : "455",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "479",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "475",
                        "s" : [ {
                           "r" : "467",
                           "value" : [ "Date","(","2000",", ","3",", ","16",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "479",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "463",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "464",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "465",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "466",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "455",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "456",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "457",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "476",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "467",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "468",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "469",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "16",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "484",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Same",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "484",
                  "s" : [ {
                     "value" : [ "","define ","Same",": " ]
                  }, {
                     "r" : "509",
                     "s" : [ {
                        "r" : "493",
                        "s" : [ {
                           "r" : "485",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "509",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "505",
                        "s" : [ {
                           "r" : "497",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "509",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "510",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "511",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "493",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "485",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "486",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "505",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "506",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "507",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "497",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "498",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "499",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "514",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "After",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "514",
                  "s" : [ {
                     "value" : [ "","define ","After",": " ]
                  }, {
                     "r" : "539",
                     "s" : [ {
                        "r" : "523",
                        "s" : [ {
                           "r" : "515",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "539",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "535",
                        "s" : [ {
                           "r" : "527",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "539",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "540",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "541",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
               }, {
                  "localId" : "535",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "537",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "538",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "528",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "529",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "544",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Before",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "544",
                  "s" : [ {
                     "value" : [ "","define ","Before",": " ]
                  }, {
                     "r" : "569",
                     "s" : [ {
                        "r" : "553",
                        "s" : [ {
                           "r" : "545",
                           "value" : [ "Date","(","2000",", ","3",", ","14",")" ]
                        } ]
                     }, {
                        "r" : "569",
                        "value" : [ " ","before"," " ]
                     }, {
                        "r" : "565",
                        "s" : [ {
                           "r" : "557",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "569",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "570",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "571",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "553",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "554",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "555",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "556",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "565",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "566",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "567",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "568",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
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
                  }
               } ]
            }
         }, {
            "localId" : "574",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDay",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "574",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDay",": " ]
                  }, {
                     "r" : "596",
                     "s" : [ {
                        "r" : "583",
                        "s" : [ {
                           "r" : "575",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "596",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "593",
                        "s" : [ {
                           "r" : "587",
                           "value" : [ "Date","(","2000",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "596",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "597",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "598",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "583",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "584",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "585",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "586",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "575",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "576",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "577",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "593",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "594",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "595",
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
                  }
               } ]
            }
         }, {
            "localId" : "601",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "601",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthAfter",": " ]
                  }, {
                     "r" : "623",
                     "s" : [ {
                        "r" : "610",
                        "s" : [ {
                           "r" : "602",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "623",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "620",
                        "s" : [ {
                           "r" : "614",
                           "value" : [ "Date","(","2000",", ","2",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "623",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "624",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "625",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
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
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "604",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "620",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "621",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "622",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "614",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "615",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "628",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ImpreciseDayMonthBefore",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "628",
                  "s" : [ {
                     "value" : [ "","define ","ImpreciseDayMonthBefore",": " ]
                  }, {
                     "r" : "650",
                     "s" : [ {
                        "r" : "637",
                        "s" : [ {
                           "r" : "629",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "650",
                        "value" : [ " ","before day of"," " ]
                     }, {
                        "r" : "647",
                        "s" : [ {
                           "r" : "641",
                           "value" : [ "Date","(","2000",", ","4",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "650",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "precision" : "Day",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "651",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "652",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "637",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
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
                  } ],
                  "year" : {
                     "localId" : "629",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "630",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "631",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "647",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "648",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "649",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "641",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "642",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "655",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullLeft",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "655",
                  "s" : [ {
                     "value" : [ "","define ","NullLeft",": " ]
                  }, {
                     "r" : "669",
                     "s" : [ {
                        "r" : "656",
                        "value" : [ "null"," ","before"," " ]
                     }, {
                        "r" : "665",
                        "s" : [ {
                           "r" : "657",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "669",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "671",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "672",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "670",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "656",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "665",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "666",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "667",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "668",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "657",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "658",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "659",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "675",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullRight",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "675",
                  "s" : [ {
                     "value" : [ "","define ","NullRight",": " ]
                  }, {
                     "r" : "689",
                     "s" : [ {
                        "r" : "684",
                        "s" : [ {
                           "r" : "676",
                           "value" : [ "Date","(","2000",", ","3",", ","15",")" ]
                        } ]
                     }, {
                        "r" : "689",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "689",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "691",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "692",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "684",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "Date",
                  "signature" : [ {
                     "localId" : "685",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "686",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "687",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "676",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2000",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "677",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "678",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "690",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "688",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "695",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullBoth",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "695",
                  "s" : [ {
                     "value" : [ "","define ","NullBoth",": " ]
                  }, {
                     "r" : "700",
                     "s" : [ {
                        "r" : "696",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "696",
                           "s" : [ {
                              "r" : "697",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "698",
                              "s" : [ {
                                 "value" : [ "Date" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "700",
                        "value" : [ " ","before"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "700",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Before",
               "signature" : [ {
                  "localId" : "702",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "703",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "696",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "697",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "698",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "701",
                  "asType" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "699",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2013",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2013",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "230",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "January2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","January2014",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Date","(","2014",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
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
               "precision" : "Week",
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
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "NewYear2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "value" : [ "difference in years between " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "difference in months between " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "difference in weeks between " ]
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
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
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
                  "name" : "January2014",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "difference in days between " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "NewYear2014" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "January2014" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DifferenceBetween",
               "signature" : [ {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "NewYear2014",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "315",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "445",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "NewYear2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NewYear2014",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2014",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "February2014",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","February2014",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "r" : "230",
                        "value" : [ "Date","(","2014",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2014",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan25DaysAfter",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "248",
                        "value" : [ " ",">"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "246",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "244",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan40DaysAfter",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "260",
                        "value" : [ " ",">"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
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
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "259",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","GreaterThan80DaysAfter",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ " ",">"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "271",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "284",
                        "value" : [ " ",">="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "296",
                        "value" : [ " ",">="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
               "signature" : [ {
                  "localId" : "297",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "GreaterOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","GreaterOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "308",
                        "value" : [ " ",">="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "302",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "GreaterOrEqual",
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
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "307",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "304",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "316",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "320",
                        "value" : [ " ","="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "315",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "318",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "316",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo40DaysAfter",": " ]
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
                        "value" : [ " ","="," ","40" ]
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
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "337",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "337",
                  "s" : [ {
                     "value" : [ "","define ","EqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "340",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "341",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "344",
                        "value" : [ " ","="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "338",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
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
                  "localId" : "339",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "343",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "340",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "344",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo25DaysAfter",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "351",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "352",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "353",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "356",
                        "value" : [ " ","<="," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "357",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "358",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
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
                     "localId" : "352",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "353",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "356",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "361",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "361",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo40DaysAfter",": " ]
                  }, {
                     "r" : "362",
                     "s" : [ {
                        "r" : "363",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "364",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "365",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "368",
                        "value" : [ " ","<="," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "362",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "369",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "370",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "366",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "367",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "368",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "373",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessOrEqualTo80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "373",
                  "s" : [ {
                     "value" : [ "","define ","LessOrEqualTo80DaysAfter",": " ]
                  }, {
                     "r" : "374",
                     "s" : [ {
                        "r" : "375",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "376",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "377",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "380",
                        "value" : [ " ","<="," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "374",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "LessOrEqual",
               "signature" : [ {
                  "localId" : "381",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "382",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "375",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "378",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "379",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "376",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "380",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "385",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan25DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "385",
                  "s" : [ {
                     "value" : [ "","define ","LessThan25DaysAfter",": " ]
                  }, {
                     "r" : "386",
                     "s" : [ {
                        "r" : "387",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "388",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "389",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "392",
                        "value" : [ " ","<"," ","25" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "386",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "393",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "394",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "387",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "390",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "391",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "389",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "392",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "397",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan40DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "397",
                  "s" : [ {
                     "value" : [ "","define ","LessThan40DaysAfter",": " ]
                  }, {
                     "r" : "398",
                     "s" : [ {
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "401",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "404",
                        "value" : [ " ","<"," ","40" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "398",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "405",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "406",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "399",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "402",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "403",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "400",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "401",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "404",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "409",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "LessThan80DaysAfter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "409",
                  "s" : [ {
                     "value" : [ "","define ","LessThan80DaysAfter",": " ]
                  }, {
                     "r" : "410",
                     "s" : [ {
                        "r" : "411",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "412",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "413",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     }, {
                        "r" : "416",
                        "value" : [ " ","<"," ","80" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "410",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "418",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "411",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "414",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "412",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "413",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "416",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "80",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "421",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TwentyFiveDaysLessThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "421",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysLessThanDaysBetween",": " ]
                  }, {
                     "r" : "422",
                     "s" : [ {
                        "r" : "423",
                        "value" : [ "25"," ","<"," " ]
                     }, {
                        "r" : "424",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "425",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "426",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "422",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Less",
               "signature" : [ {
                  "localId" : "429",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "430",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "423",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "424",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "428",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "433",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FortyDaysEqualToDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "433",
                  "s" : [ {
                     "value" : [ "","define ","FortyDaysEqualToDaysBetween",": " ]
                  }, {
                     "r" : "434",
                     "s" : [ {
                        "r" : "435",
                        "value" : [ "40"," ","="," " ]
                     }, {
                        "r" : "436",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "437",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "438",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "434",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Equal",
               "signature" : [ {
                  "localId" : "441",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "442",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "435",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "40",
                  "type" : "Literal"
               }, {
                  "localId" : "436",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "439",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "440",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "437",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "February2014",
                     "type" : "ExpressionRef"
                  } ]
               } ]
            }
         }, {
            "localId" : "445",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TwentyFiveDaysGreaterThanDaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "445",
                  "s" : [ {
                     "value" : [ "","define ","TwentyFiveDaysGreaterThanDaysBetween",": " ]
                  }, {
                     "r" : "446",
                     "s" : [ {
                        "r" : "447",
                        "value" : [ "25"," ",">"," " ]
                     }, {
                        "r" : "448",
                        "s" : [ {
                           "value" : [ "difference in days between " ]
                        }, {
                           "r" : "449",
                           "s" : [ {
                              "value" : [ "NewYear2014" ]
                           } ]
                        }, {
                           "value" : [ " and " ]
                        }, {
                           "r" : "450",
                           "s" : [ {
                              "value" : [ "February2014" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "446",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Greater",
               "signature" : [ {
                  "localId" : "453",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "454",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "447",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "25",
                  "type" : "Literal"
               }, {
                  "localId" : "448",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "precision" : "Day",
                  "type" : "DifferenceBetween",
                  "signature" : [ {
                     "localId" : "451",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "452",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "449",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "name" : "NewYear2014",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "450",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DecTen2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","DecTen2013",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2013",", ","12",", ","10",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "JanOne2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","JanOne2015",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "230",
                        "value" : [ "Date","(","2015",", ","1",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "January2015",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","January2015",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "245",
                        "value" : [ "Date","(","2015",", ","1",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "251",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "252",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2015",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetween",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "261",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetween",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "267",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "272",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetween",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "value" : [ "weeks between " ]
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
               "precision" : "Week",
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
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetween",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetween",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "DecTen2013" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "DecTen2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "YearsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","YearsBetweenUncertainty",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "value" : [ "years between " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Year",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MonthsBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","MonthsBetweenUncertainty",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "months between " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Month",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "301",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "298",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "WeeksBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","WeeksBetweenUncertainty",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "weeks between " ]
                     }, {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Week",
               "type" : "DurationBetween",
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
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "January2015",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "DaysBetweenUncertainty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","DaysBetweenUncertainty",": " ]
                  }, {
                     "r" : "313",
                     "s" : [ {
                        "value" : [ "days between " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "JanOne2015" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "January2015" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "313",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "precision" : "Day",
               "type" : "DurationBetween",
               "signature" : [ {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "314",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "JanOne2015",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "315",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "285",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "June15th2013",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","June15th2013",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Date","(","2013",", ","6",", ","15",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "year" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2013",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "15",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeYears",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusThreeYears",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeYears",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "3 ","years" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "239",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "years",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","PlusEightMonths",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusEightMonths",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","MinusEightMonths",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "8 ","months" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 8,
                  "unit" : "months",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","PlusThreeWeeks",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
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
               "type" : "Add",
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
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusThreeWeeks",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","MinusThreeWeeks",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "3 ","weeks" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "271",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 3,
                  "unit" : "weeks",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "PlusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","PlusTwentyDays",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "value" : 20,
                  "unit" : "days",
                  "type" : "Quantity"
               } ]
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "MinusTwentyDays",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","MinusTwentyDays",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "June15th2013" ]
                        } ]
                     }, {
                        "value" : [ " - " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "20 ","days" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Subtract",
               "signature" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                  "name" : "June15th2013",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "288",
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

