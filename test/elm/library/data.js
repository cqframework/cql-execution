/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* In Age Demographic
library TestSnippet version '1'
using Simple version '1.0.0'
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18
*/

module.exports['In Age Demographic'] = {
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
            "r" : "242",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "r" : "208",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "235",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "232",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "217",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "208",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "209",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "240",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "238",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "239",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "245",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "246",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "258",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "262",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "263",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "275",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
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
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "257",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "254",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "253",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "245",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "249",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "250",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "246",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "247",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "248",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "273",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "274",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "271",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "270",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "262",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "266",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "267",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "263",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "264",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "265",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* CommonLib
library Common
using Simple version '1.0.0'
include Common2 called common2

codesystem "SNOMEDCT": '2.16.840.1.113883.6.96'
code "directReferenceCode": '428371000124100' from "SNOMEDCT" display 'directReferenceCode'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define InDemographic:
AgeInYearsAt(start of MeasurementPeriod) >= 2 and AgeInYearsAt(start of MeasurementPeriod) < 18

define function foo (a Integer, b Integer) :
  a + b

define SupportLibDef:
  common2.TheParameter + common2.TwoPlusOne + common2.TwoTimesThree
*/

module.exports['CommonLib'] = {
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
            "r" : "295",
            "s" : [ {
               "value" : [ "","library Common" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "Common"
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common2" ]
                     } ]
                  }, {
                     "value" : [ " called ","common2" ]
                  } ]
               }
            } ]
         } ]
      },
      "parameters" : {
         "def" : [ {
            "localId" : "211",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "r" : "212",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "239",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "236",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMEDCT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMEDCT\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "directReferenceCode",
            "id" : "428371000124100",
            "display" : "directReferenceCode",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","code ","\"directReferenceCode\"",": ","'428371000124100'"," from " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "\"SNOMEDCT\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'directReferenceCode'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMEDCT"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "244",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "242",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "243",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "248",
                        "s" : [ {
                           "r" : "259",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "249",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "250",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "262",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "266",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "267",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "279",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "283",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
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
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "260",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "258",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "257",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "249",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "253",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "254",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "250",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "251",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "252",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "278",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "275",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "274",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "266",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "270",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "271",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "267",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "268",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "269",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define function foo (a Integer, b Integer) :\n  " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "r" : "290",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "291",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "292",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "286",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "288",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SupportLibDef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","SupportLibDef",":\n  " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "r" : "299",
                           "s" : [ {
                              "r" : "298",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "299",
                              "s" : [ {
                                 "value" : [ "TheParameter" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "r" : "300",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "301",
                              "s" : [ {
                                 "value" : [ "TwoPlusOne" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "common2" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "TwoTimesThree" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "296",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "306",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "307",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "297",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
                  "signature" : [ {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "TheParameter",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "TwoPlusOne",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "305",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "TwoTimesThree",
                  "libraryName" : "common2",
                  "type" : "ExpressionRef"
               } ]
            }
         } ]
      }
   }
}

/* Using CommonLib
library TestSnippet version '1'
using Simple version '1.0.0'

include Common called common
parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define ID: common.InDemographic

define L : Length(Patient.name)
define FuncTest : common.foo(2, 5)
define supportLibCode: common."directReferenceCode"
*/

module.exports['Using CommonLib'] = {
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
            "r" : "264",
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "common",
            "path" : "Common",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common" ]
                     } ]
                  }, {
                     "value" : [ " called ","common" ]
                  } ]
               }
            } ]
         } ]
      },
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "209",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "221",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "236",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "237",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "233",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "234",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "235",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "209",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "241",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "239",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "240",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ID",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","ID",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "InDemographic" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "InDemographic",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "L",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","L"," : " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "Patient" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "name" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "name",
                  "type" : "Property",
                  "source" : {
                     "localId" : "248",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncTest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","FuncTest"," : " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "258",
                           "value" : [ "foo","(","2",", ","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "foo",
               "libraryName" : "common",
               "type" : "FunctionRef",
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
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "supportLibCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","supportLibCode",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "\"directReferenceCode\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "directReferenceCode",
               "libraryName" : "common",
               "type" : "CodeRef"
            }
         } ]
      }
   }
}

/* CommonLib2
library Common2
using Simple version '1.0.0'
parameter SomeNumber default 17
parameter AnotherNumber default 20

context Patient

define TheParameter:
  SomeNumber

define function addToParameter(a Integer):
  SomeNumber + a

define AnotherParameter:
  AnotherNumber

define function addToAnotherParameter(a Integer):
  AnotherNumber + a

define function multiply(a Integer, b Integer) :
  a * b

define function square(a Integer):
  multiply(a, a)

define TwoTimesThree:
  multiply(2, 3)

define Two:
  2

define function addTwo(a Integer):
  a + Two

define TwoPlusOne:
  Two + 1

define SortUsingFunction:
  ({1, 3, 2, 5, 4}) N return Tuple{N: N} sort by square(N)
*/

module.exports['CommonLib2'] = {
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
            "r" : "281",
            "s" : [ {
               "value" : [ "","library Common2" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "Common2"
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SomeNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "r" : "208",
                     "value" : [ "","parameter ","SomeNumber"," default ","17" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "17",
               "type" : "Literal"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AnotherNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","AnotherNumber"," default ","20" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "20",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TheParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","TheParameter",":\n  " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "SomeNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SomeNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addToParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define function addToParameter(a Integer):\n  " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "s" : [ {
                              "value" : [ "SomeNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "SomeNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "220",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","AnotherParameter",":\n  " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "AnotherNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addToAnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define function addToAnotherParameter(a Integer):\n  " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "AnotherNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "AnotherNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "231",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "multiply",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define function multiply(a Integer, b Integer) :\n  " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
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
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "239",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "241",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "square",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define function square(a Integer):\n  " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "multiply","(" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "multiply",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "249",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "248",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TwoTimesThree",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","TwoTimesThree",":\n  " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "r" : "257",
                        "value" : [ "multiply","(","2",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "multiply",
               "type" : "FunctionRef",
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
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Two",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "r" : "264",
                     "value" : [ "","define ","Two",":\n  ","2" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define function addTwo(a Integer):\n  " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "Two" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               } ]
            },
            "operand" : [ {
               "localId" : "267",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TwoPlusOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","TwoPlusOne",":\n  " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "Two" ]
                        } ]
                     }, {
                        "r" : "277",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "281",
            "name" : "SortUsingFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","SortUsingFunction",":\n  " ]
                  }, {
                     "r" : "319",
                     "s" : [ {
                        "s" : [ {
                           "r" : "282",
                           "s" : [ {
                              "r" : "283",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "283",
                                 "s" : [ {
                                    "r" : "284",
                                    "value" : [ "{","1",", ","3",", ","2",", ","5",", ","4","}" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           }, {
                              "value" : [ " ","N" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "297",
                                 "s" : [ {
                                    "value" : [ "N" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " " ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "r" : "310",
                              "s" : [ {
                                 "value" : [ "square","(" ]
                              }, {
                                 "r" : "309",
                                 "s" : [ {
                                    "value" : [ "N" ]
                                 } ]
                              }, {
                                 "value" : [ ")" ]
                              } ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "324",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "325",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "326",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "327",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "319",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "320",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "321",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "322",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "323",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "282",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "293",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "283",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "291",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "292",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "284",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "285",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "286",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "287",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "288",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "let" : [ ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "295",
                  "resultTypeSpecifier" : {
                     "localId" : "301",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "302",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "303",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "304",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "296",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "298",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "299",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "300",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "297",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "313",
                  "by" : [ {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "310",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "square",
                        "type" : "FunctionRef",
                        "signature" : [ {
                           "localId" : "311",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "309",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "IdentifierRef"
                        } ]
                     }
                  } ]
               }
            }
         } ]
      }
   }
}

/* Using CommonLib2
library TestSnippet version '1'
using Simple version '1.0.0'
include Common2 called common2

context Patient

define ExprUsesParam: common2.TheParameter
define ExprUsesParamDirectly: common2.SomeNumber
define ExprUsesAnotherParam: common2.AnotherParameter
define ExprUsesAnotherParamDirectly: common2.AnotherNumber
define FuncUsesAnotherParam: common2.addToAnotherParameter(5)
define FuncUsesParam: common2.addToParameter(5)
define ExprCallsFunc: common2.TwoTimesThree
define FuncCallsFunc: common2.square(5)
define ExprUsesExpr: common2.TwoPlusOne
define FuncUsesExpr: common2.addTwo(5)
define ExprSortsOnFunc: common2.SortUsingFunction
*/

module.exports['Using CommonLib2'] = {
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
            "r" : "261",
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common2" ]
                     } ]
                  }, {
                     "value" : [ " called ","common2" ]
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
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParam",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "TheParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TheParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParamDirectly",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "SomeNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SomeNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParam",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "AnotherParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesAnotherParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParamDirectly",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "AnotherNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesAnotherParam",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "231",
                           "value" : [ "addToAnotherParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "232",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addToAnotherParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesParam",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "r" : "237",
                           "value" : [ "addToParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addToParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","ExprCallsFunc",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "TwoTimesThree" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TwoTimesThree",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","FuncCallsFunc",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "r" : "247",
                           "value" : [ "square","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "square",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesExpr",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "TwoPlusOne" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TwoPlusOne",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesExpr",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "addTwo","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addTwo",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "257",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "261",
            "name" : "ExprSortsOnFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","ExprSortsOnFunc",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "272",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "273",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "274",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "263",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef",
               "resultTypeSpecifier" : {
                  "localId" : "268",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "269",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "270",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "271",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         } ]
      }
   }
}

/* Using CommonLib and CommonLib2
library TestSnippet version '1'
using Simple version '1.0.0'
include Common2 called common2
include Common called common

context Patient

define testCommonLib: common.SupportLibDef
define testCommon2Lib: common2.SortUsingFunction
*/

module.exports['Using CommonLib and CommonLib2'] = {
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
            "r" : "218",
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common2" ]
                     } ]
                  }, {
                     "value" : [ " called ","common2" ]
                  } ]
               }
            } ]
         }, {
            "localId" : "208",
            "localIdentifier" : "common",
            "path" : "Common",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common" ]
                     } ]
                  }, {
                     "value" : [ " called ","common" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "210",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "211",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "209",
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
            "name" : "testCommonLib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","testCommonLib",": " ]
                  }, {
                     "r" : "216",
                     "s" : [ {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "SupportLibDef" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SupportLibDef",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "218",
            "name" : "testCommon2Lib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","testCommon2Lib",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "229",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "230",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "231",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "220",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef",
               "resultTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "226",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "227",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "228",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               }
            }
         } ]
      }
   }
}

/* CommonLib3
library Common3
using Simple version '1.0.0'
context Patient

define function ExpensiveFunction():
  First(expand Interval[1, 100000])

define ExpensiveStatement:
  ExpensiveFunction()

define ExpensiveStatementRef:
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement union 
  ExpensiveStatement
*/

module.exports['CommonLib3'] = {
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
            "r" : "224",
            "s" : [ {
               "value" : [ "","library Common3" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "Common3"
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
            "localId" : "211",
            "name" : "ExpensiveFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function ExpensiveFunction():\n  " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "expand " ]
                           }, {
                              "r" : "214",
                              "s" : [ {
                                 "r" : "212",
                                 "value" : [ "Interval[","1",", ","100000","]" ]
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
               "localId" : "219",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "216",
                  "type" : "Expand",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "214",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "212",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "213",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "100000",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "215",
                     "type" : "Null"
                  } ]
               }
            },
            "operand" : [ ]
         }, {
            "localId" : "221",
            "name" : "ExpensiveStatement",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatement",":\n  " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "ExpensiveFunction","()" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "name" : "ExpensiveFunction",
               "type" : "FunctionRef",
               "signature" : [ ],
               "operand" : [ ]
            }
         }, {
            "localId" : "224",
            "name" : "ExpensiveStatementRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatementRef",":\n  " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "236",
                        "s" : [ {
                           "r" : "231",
                           "s" : [ {
                              "r" : "227",
                              "s" : [ {
                                 "r" : "225",
                                 "s" : [ {
                                    "value" : [ "ExpensiveStatement" ]
                                 } ]
                              }, {
                                 "value" : [ " union \n  " ]
                              }, {
                                 "r" : "226",
                                 "s" : [ {
                                    "value" : [ "ExpensiveStatement" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " union \n  " ]
                           }, {
                              "r" : "230",
                              "s" : [ {
                                 "value" : [ "ExpensiveStatement" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " union \n  " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "ExpensiveStatement" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " union \n  " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "ExpensiveStatement" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "type" : "Union",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "227",
                     "type" : "Union",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "228",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "225",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "229",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "226",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  }, {
                     "localId" : "234",
                     "type" : "Union",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "232",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "230",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "235",
                        "type" : "ToList",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "233",
                           "name" : "ExpensiveStatement",
                           "type" : "ExpressionRef"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "239",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "237",
                     "name" : "ExpensiveStatement",
                     "type" : "ExpressionRef"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Using CommonLib3
library TestSnippet version '1'
using Simple version '1.0.0'
include Common3 called common3
context Patient

define ExpensiveStatementRef: common3.ExpensiveStatementRef
*/

module.exports['Using CommonLib3'] = {
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
            "r" : "213",
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
      "includes" : {
         "def" : [ {
            "localId" : "207",
            "localIdentifier" : "common3",
            "path" : "Common3",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","include " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Common3" ]
                     } ]
                  }, {
                     "value" : [ " called ","common3" ]
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
            "localId" : "213",
            "name" : "ExpensiveStatementRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","define ","ExpensiveStatementRef",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "common3" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "ExpensiveStatementRef" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "name" : "ExpensiveStatementRef",
               "libraryName" : "common3",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

