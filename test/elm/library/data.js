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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "245",
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
               "localId" : "237",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "238",
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
            "localId" : "242",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "240",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "241",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "239",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "r" : "258",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "248",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "249",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "261",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "r" : "275",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "265",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "266",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "278",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "281",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "282",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
                  "signature" : [ {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "260",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "257",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "256",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "248",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "252",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "253",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "249",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "250",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "251",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "276",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "274",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "273",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "265",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "269",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "270",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "266",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "267",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "268",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "278",
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

valueset "My Favorite VS": '9.7.5.3.1'
valueset "Acute Pharyngitis": '2.16.840.1.113883.3.464.1003.101.12.1001'
codesystem "My Favorite CS": '1.3.5.7.9'
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "298",
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
            "localId" : "208",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
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
            "localId" : "214",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "242",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "239",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "240",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
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
               },
               "high" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
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
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "My Favorite CS",
            "id" : "1.3.5.7.9",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"My Favorite CS\"",": ","'1.3.5.7.9'" ]
                  } ]
               }
            } ]
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMEDCT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMEDCT\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "My Favorite VS",
            "id" : "9.7.5.3.1",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"My Favorite VS\"",": ","'9.7.5.3.1'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "Acute Pharyngitis",
            "id" : "2.16.840.1.113883.3.464.1003.101.12.1001",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","valueset ","\"Acute Pharyngitis\"",": ","'2.16.840.1.113883.3.464.1003.101.12.1001'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "directReferenceCode",
            "id" : "428371000124100",
            "display" : "directReferenceCode",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","code ","\"directReferenceCode\"",": ","'428371000124100'"," from " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "\"SNOMEDCT\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'directReferenceCode'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMEDCT"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "247",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "245",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "246",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "244",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "252",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "253",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "265",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "269",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "270",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "282",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "286",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "GreaterOrEqual",
                  "signature" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "263",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "264",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "261",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "260",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "252",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "256",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "257",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "253",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "254",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "255",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "Less",
                  "signature" : [ {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "signature" : [ {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "281",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : [ {
                        "localId" : "278",
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "localId" : "277",
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "269",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "Start",
                        "signature" : [ {
                           "localId" : "273",
                           "type" : "IntervalTypeSpecifier",
                           "pointType" : {
                              "localId" : "274",
                              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ],
                        "operand" : {
                           "localId" : "270",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef",
                           "resultTypeSpecifier" : {
                              "localId" : "271",
                              "type" : "IntervalTypeSpecifier",
                              "pointType" : {
                                 "localId" : "272",
                                 "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                 "type" : "NamedTypeSpecifier"
                              }
                           }
                        }
                     } ]
                  }, {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define function foo (a Integer, b Integer) :\n  " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "292",
                        "s" : [ {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "295",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "296",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "289",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "291",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "290",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "298",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SupportLibDef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","SupportLibDef",":\n  " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "r" : "302",
                           "s" : [ {
                              "r" : "301",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "302",
                              "s" : [ {
                                 "value" : [ "TheParameter" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "r" : "303",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "304",
                              "s" : [ {
                                 "value" : [ "TwoPlusOne" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "common2" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "TwoTimesThree" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "localId" : "300",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Add",
                  "signature" : [ {
                     "localId" : "305",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "TheParameter",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "304",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "TwoPlusOne",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "308",
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

valueset "My Favorite VS": '10.8.6.4.2'
codesystem "My Favorite CS": '2.4.6.8.10'

parameter MeasurementPeriod default Interval[DateTime(2013, 1, 1), DateTime(2014, 1, 1))

context Patient

define ID: common.InDemographic

define L : Length(Patient.name)
define FuncTest : common.foo(2, 5)
define supportLibCode: common."directReferenceCode"
define supportLibCodeSystem: common."SNOMEDCT"
define supportClashingCodeSystemNames:
  Tuple {
    MyFavorite: "My Favorite CS",
    MyLibsFavorite: common."My Favorite CS"
  }
define supportLibValueSet: common."Acute Pharyngitis"
define supportClashingValueSetNames:
  Tuple {
    MyFavorite: "My Favorite VS",
    MyLibsFavorite: common."My Favorite VS"
  }
*/

module.exports['Using CommonLib'] = {
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
            "r" : "294",
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
      "parameters" : {
         "def" : [ {
            "localId" : "210",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "211",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "238",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "235",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "DateTime",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "year" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "225",
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
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "My Favorite CS",
            "id" : "2.4.6.8.10",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"My Favorite CS\"",": ","'2.4.6.8.10'" ]
                  } ]
               }
            } ]
         } ]
      },
      "valueSets" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "My Favorite VS",
            "id" : "10.8.6.4.2",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","valueset ","\"My Favorite VS\"",": ","'10.8.6.4.2'" ]
                  } ]
               }
            } ],
            "codeSystem" : [ ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "243",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "241",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "242",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "240",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ID",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","ID",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "InDemographic" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "InDemographic",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "L",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","L"," : " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "Patient" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "251",
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
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Length",
               "signature" : [ {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "path" : "name",
                  "type" : "Property",
                  "source" : {
                     "localId" : "250",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncTest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "258",
                  "s" : [ {
                     "value" : [ "","define ","FuncTest"," : " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "foo","(","2",", ","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "foo",
               "libraryName" : "common",
               "type" : "FunctionRef",
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
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "supportLibCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","supportLibCode",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "267",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "\"directReferenceCode\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "directReferenceCode",
               "libraryName" : "common",
               "type" : "CodeRef"
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "supportLibCodeSystem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","supportLibCodeSystem",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "\"SNOMEDCT\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMEDCT",
               "libraryName" : "common",
               "type" : "CodeSystemRef"
            }
         }, {
            "localId" : "274",
            "name" : "supportClashingCodeSystemNames",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","supportClashingCodeSystemNames",":\n  " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "Tuple {\n    " ]
                     }, {
                        "s" : [ {
                           "value" : [ "MyFavorite",": " ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "\"My Favorite CS\"" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n    " ]
                     }, {
                        "s" : [ {
                           "value" : [ "MyLibsFavorite",": " ]
                        }, {
                           "r" : "278",
                           "s" : [ {
                              "r" : "277",
                              "s" : [ {
                                 "value" : [ "common" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "278",
                              "s" : [ {
                                 "value" : [ "\"My Favorite CS\"" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n  }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "284",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "285",
                  "name" : "MyFavorite",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "287",
                  "name" : "MyLibsFavorite",
                  "elementType" : {
                     "localId" : "288",
                     "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "275",
               "type" : "Tuple",
               "resultTypeSpecifier" : {
                  "localId" : "279",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "280",
                     "name" : "MyFavorite",
                     "elementType" : {
                        "localId" : "281",
                        "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "282",
                     "name" : "MyLibsFavorite",
                     "elementType" : {
                        "localId" : "283",
                        "name" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "name" : "MyFavorite",
                  "value" : {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "name" : "My Favorite CS",
                     "type" : "CodeSystemRef"
                  }
               }, {
                  "name" : "MyLibsFavorite",
                  "value" : {
                     "localId" : "278",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "name" : "My Favorite CS",
                     "libraryName" : "common",
                     "type" : "CodeSystemRef"
                  }
               } ]
            }
         }, {
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
            "name" : "supportLibValueSet",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","supportLibValueSet",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "\"Acute Pharyngitis\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
               "name" : "Acute Pharyngitis",
               "libraryName" : "common",
               "preserve" : true,
               "type" : "ValueSetRef"
            }
         }, {
            "localId" : "294",
            "name" : "supportClashingValueSetNames",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","supportClashingValueSetNames",":\n  " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "value" : [ "Tuple {\n    " ]
                     }, {
                        "s" : [ {
                           "value" : [ "MyFavorite",": " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "\"My Favorite VS\"" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n    " ]
                     }, {
                        "s" : [ {
                           "value" : [ "MyLibsFavorite",": " ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "r" : "297",
                              "s" : [ {
                                 "value" : [ "common" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "298",
                              "s" : [ {
                                 "value" : [ "\"My Favorite VS\"" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n  }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "304",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "305",
                  "name" : "MyFavorite",
                  "elementType" : {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "307",
                  "name" : "MyLibsFavorite",
                  "elementType" : {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "295",
               "type" : "Tuple",
               "resultTypeSpecifier" : {
                  "localId" : "299",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "300",
                     "name" : "MyFavorite",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "302",
                     "name" : "MyLibsFavorite",
                     "elementType" : {
                        "localId" : "303",
                        "name" : "{urn:hl7-org:elm-types:r1}ValueSet",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "name" : "MyFavorite",
                  "value" : {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "My Favorite VS",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               }, {
                  "name" : "MyLibsFavorite",
                  "value" : {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                     "name" : "My Favorite VS",
                     "libraryName" : "common",
                     "preserve" : true,
                     "type" : "ValueSetRef"
                  }
               } ]
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "301",
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
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "SomeNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "r" : "209",
                     "value" : [ "","parameter ","SomeNumber"," default ","17" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "17",
               "type" : "Literal"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AnotherNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","AnotherNumber"," default ","20" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "20",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "216",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TheParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","TheParameter",":\n  " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "SomeNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SomeNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addToParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define function addToParameter(a Integer):\n  " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "s" : [ {
                              "value" : [ "SomeNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "SomeNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "224",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "AnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","AnotherParameter",":\n  " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "AnotherNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addToAnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define function addToAnotherParameter(a Integer):\n  " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "241",
                        "s" : [ {
                           "r" : "242",
                           "s" : [ {
                              "value" : [ "AnotherNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "AnotherNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "238",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "multiply",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define function multiply(a Integer, b Integer) :\n  " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Multiply",
               "signature" : [ {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "248",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "247",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "localId" : "250",
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "square",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define function square(a Integer):\n  " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "multiply","(" ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "265",
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
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "multiply",
               "type" : "FunctionRef",
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
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "265",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "localId" : "261",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TwoTimesThree",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","TwoTimesThree",":\n  " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "272",
                        "value" : [ "multiply","(","2",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "multiply",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "273",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Two",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "r" : "280",
                     "value" : [ "","define ","Two",":\n  ","2" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
            }
         }, {
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "addTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define function addTwo(a Integer):\n  " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "Two" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "localId" : "287",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               } ]
            },
            "operand" : [ {
               "localId" : "283",
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "282",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TwoPlusOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","TwoPlusOne",":\n  " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "Two" ]
                        } ]
                     }, {
                        "r" : "296",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Add",
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
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "301",
            "name" : "SortUsingFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","SortUsingFunction",":\n  " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "s" : [ {
                           "r" : "302",
                           "s" : [ {
                              "r" : "303",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "303",
                                 "s" : [ {
                                    "r" : "304",
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
                        "r" : "316",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "318",
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
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "r" : "331",
                              "s" : [ {
                                 "value" : [ "square","(" ]
                              }, {
                                 "r" : "330",
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
               "localId" : "345",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "346",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "347",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "348",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "340",
               "type" : "Query",
               "resultTypeSpecifier" : {
                  "localId" : "341",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "342",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "343",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "344",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               },
               "source" : [ {
                  "localId" : "302",
                  "alias" : "N",
                  "resultTypeSpecifier" : {
                     "localId" : "313",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "314",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "expression" : {
                     "localId" : "303",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "311",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "312",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "304",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "305",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "306",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "307",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "308",
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
                  "localId" : "316",
                  "resultTypeSpecifier" : {
                     "localId" : "322",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "323",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "324",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "325",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  },
                  "expression" : {
                     "localId" : "317",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "319",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "320",
                           "name" : "N",
                           "elementType" : {
                              "localId" : "321",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "318",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "334",
                  "by" : [ {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "331",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "square",
                        "type" : "FunctionRef",
                        "signature" : [ {
                           "localId" : "332",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : [ {
                           "localId" : "330",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "274",
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
            "localId" : "208",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
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
            "localId" : "213",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "211",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "212",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "210",
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
            "name" : "ExprUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParam",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "TheParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TheParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParamDirectly",": " ]
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
                           "value" : [ "SomeNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SomeNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParam",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "AnotherParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesAnotherParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParamDirectly",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "AnotherNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "AnotherNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesAnotherParam",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "addToAnotherParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addToAnotherParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesParam",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "addToParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addToParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "247",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "245",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","ExprCallsFunc",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "TwoTimesThree" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TwoTimesThree",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","FuncCallsFunc",": " ]
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
                           "value" : [ "square","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "square",
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
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ExprUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesExpr",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "TwoPlusOne" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "TwoPlusOne",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FuncUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesExpr",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "addTwo","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "addTwo",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "274",
            "name" : "ExprSortsOnFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","ExprSortsOnFunc",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "285",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "286",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "287",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "288",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "276",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef",
               "resultTypeSpecifier" : {
                  "localId" : "281",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "282",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "283",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "284",
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
library UsingTwoLibs version '0.0.1'
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
            "s" : [ {
               "value" : [ "","library UsingTwoLibs version '0.0.1'" ]
            } ]
         }
      } ],
      "identifier" : {
         "id" : "UsingTwoLibs",
         "version" : "0.0.1"
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
            "localId" : "208",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
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
            "localId" : "210",
            "localIdentifier" : "common",
            "path" : "Common",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
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
            "localId" : "215",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "214",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "212",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "testCommonLib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","testCommonLib",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "SupportLibDef" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "SupportLibDef",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "223",
            "name" : "testCommon2Lib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","testCommon2Lib",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "234",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "235",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "236",
                     "name" : "N",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            },
            "expression" : {
               "localId" : "225",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef",
               "resultTypeSpecifier" : {
                  "localId" : "230",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "231",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "232",
                        "name" : "N",
                        "elementType" : {
                           "localId" : "233",
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

