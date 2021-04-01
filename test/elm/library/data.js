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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "23",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "parameters" : {
         "def" : [ {
            "localId" : "11",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "10",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "5",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "9",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "8",
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
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "23",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "16",
                        "s" : [ {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "13",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "12",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "15",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "18",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "17",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "20",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "And",
               "operand" : [ {
                  "localId" : "16",
                  "type" : "GreaterOrEqual",
                  "operand" : [ {
                     "localId" : "14",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "operand" : [ {
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "13",
                        "type" : "Start",
                        "operand" : {
                           "localId" : "12",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "21",
                  "type" : "Less",
                  "operand" : [ {
                     "localId" : "19",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "operand" : [ {
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "18",
                        "type" : "Start",
                        "operand" : {
                           "localId" : "17",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "20",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "42",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "includes" : {
         "def" : [ {
            "localId" : "2",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
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
            "localId" : "15",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "14",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "9",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "13",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "12",
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
            "localId" : "3",
            "name" : "SNOMEDCT",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMEDCT\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "5",
            "name" : "directReferenceCode",
            "id" : "428371000124100",
            "display" : "directReferenceCode",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","code ","\"directReferenceCode\"",": ","'428371000124100'"," from " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "\"SNOMEDCT\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'directReferenceCode'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "4",
               "name" : "SNOMEDCT"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "27",
            "name" : "InDemographic",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","InDemographic",":\n" ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "16",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "19",
                           "value" : [ " ",">="," ","2" ]
                        } ]
                     }, {
                        "value" : [ " and " ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "AgeInYearsAt","(" ]
                           }, {
                              "r" : "22",
                              "s" : [ {
                                 "value" : [ "start of " ]
                              }, {
                                 "r" : "21",
                                 "s" : [ {
                                    "value" : [ "MeasurementPeriod" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "r" : "24",
                           "value" : [ " ","<"," ","18" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "And",
               "operand" : [ {
                  "localId" : "20",
                  "type" : "GreaterOrEqual",
                  "operand" : [ {
                     "localId" : "18",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "operand" : [ {
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "17",
                        "type" : "Start",
                        "operand" : {
                           "localId" : "16",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "25",
                  "type" : "Less",
                  "operand" : [ {
                     "localId" : "23",
                     "precision" : "Year",
                     "type" : "CalculateAgeAt",
                     "operand" : [ {
                        "path" : "birthDate",
                        "type" : "Property",
                        "source" : {
                           "name" : "Patient",
                           "type" : "ExpressionRef"
                        }
                     }, {
                        "localId" : "22",
                        "type" : "Start",
                        "operand" : {
                           "localId" : "21",
                           "name" : "MeasurementPeriod",
                           "type" : "ParameterRef"
                        }
                     } ]
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "18",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "33",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define function ","foo"," (","a"," " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ", ","b"," " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "32",
                        "s" : [ {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "31",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "30",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "31",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "28",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "29",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "42",
            "name" : "SupportLibDef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "","define ","SupportLibDef",":\n  " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "r" : "35",
                           "s" : [ {
                              "r" : "34",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "35",
                              "s" : [ {
                                 "value" : [ "TheParameter" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "r" : "36",
                              "s" : [ {
                                 "value" : [ "common2" ]
                              } ]
                           }, {
                              "value" : [ "." ]
                           }, {
                              "r" : "37",
                              "s" : [ {
                                 "value" : [ "TwoPlusOne" ]
                              } ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " + " ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "common2" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "TwoTimesThree" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "41",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "38",
                  "type" : "Add",
                  "operand" : [ {
                     "localId" : "35",
                     "name" : "TheParameter",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  }, {
                     "localId" : "37",
                     "name" : "TwoPlusOne",
                     "libraryName" : "common2",
                     "type" : "ExpressionRef"
                  } ]
               }, {
                  "localId" : "40",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "27",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "includes" : {
         "def" : [ {
            "localId" : "2",
            "localIdentifier" : "common",
            "path" : "Common",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
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
            "localId" : "12",
            "name" : "MeasurementPeriod",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","parameter ","MeasurementPeriod"," default " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "Interval[" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "3",
                           "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "7",
                           "value" : [ "DateTime","(","2014",", ","1",", ","1",")" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "11",
               "lowClosed" : true,
               "highClosed" : false,
               "type" : "Interval",
               "low" : {
                  "localId" : "6",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2013",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "high" : {
                  "localId" : "10",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "9",
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
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "15",
            "name" : "ID",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","ID",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "InDemographic" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "name" : "InDemographic",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "19",
            "name" : "L",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","L"," : " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "16",
                           "s" : [ {
                              "value" : [ "Patient" ]
                           } ]
                        }, {
                           "value" : [ "." ]
                        }, {
                           "r" : "17",
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
               "localId" : "18",
               "type" : "Length",
               "operand" : {
                  "localId" : "17",
                  "path" : "name",
                  "type" : "Property",
                  "source" : {
                     "localId" : "16",
                     "name" : "Patient",
                     "type" : "ExpressionRef"
                  }
               }
            }
         }, {
            "localId" : "24",
            "name" : "FuncTest",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","FuncTest"," : " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "foo","(","2",", ","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "name" : "foo",
               "libraryName" : "common",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "21",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "22",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "27",
            "name" : "supportLibCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","supportLibCode",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "\"directReferenceCode\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "64",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "SomeNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","parameter ","SomeNumber"," default ","17" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "17",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "AnotherNumber",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","AnotherNumber"," default ","20" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "20",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "7",
            "name" : "TheParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","TheParameter",":\n  " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "SomeNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "SomeNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "12",
            "name" : "addToParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define function ","addToParameter","(","a"," " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ "):\n  " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "11",
                        "s" : [ {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "SomeNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "9",
                  "name" : "SomeNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "10",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "8",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "14",
            "name" : "AnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","AnotherParameter",":\n  " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "AnotherNumber" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "name" : "AnotherNumber",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "19",
            "name" : "addToAnotherParameter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define function ","addToAnotherParameter","(","a"," " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ "):\n  " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "r" : "16",
                           "s" : [ {
                              "value" : [ "AnotherNumber" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "17",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "16",
                  "name" : "AnotherNumber",
                  "type" : "ParameterRef"
               }, {
                  "localId" : "17",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "15",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "25",
            "name" : "multiply",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define function ","multiply","(","a"," " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ", ","b"," " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ ") :\n  " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "24",
                        "s" : [ {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " * " ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "b" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Multiply",
               "operand" : [ {
                  "localId" : "22",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "23",
                  "name" : "b",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "20",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }, {
               "name" : "b",
               "operandTypeSpecifier" : {
                  "localId" : "21",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "30",
            "name" : "square",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define function ","square","(","a"," " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ "):\n  " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "multiply","(" ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "28",
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
               "localId" : "29",
               "name" : "multiply",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "27",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "28",
                  "name" : "a",
                  "type" : "OperandRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "26",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "34",
            "name" : "TwoTimesThree",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","TwoTimesThree",":\n  " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "31",
                        "value" : [ "multiply","(","2",", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "name" : "multiply",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "31",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               }, {
                  "localId" : "32",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "36",
            "name" : "Two",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "r" : "35",
                     "value" : [ "","define ","Two",":\n  ","2" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "35",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
            }
         }, {
            "localId" : "41",
            "name" : "addTwo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define function ","addTwo","(","a"," " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  }, {
                     "value" : [ "):\n  " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "40",
                        "s" : [ {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "a" ]
                           } ]
                        }, {
                           "value" : [ " + " ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Two" ]
                           } ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "38",
                  "name" : "a",
                  "type" : "OperandRef"
               }, {
                  "localId" : "39",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               } ]
            },
            "operand" : [ {
               "name" : "a",
               "operandTypeSpecifier" : {
                  "localId" : "37",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "45",
            "name" : "TwoPlusOne",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "","define ","TwoPlusOne",":\n  " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "Two" ]
                        } ]
                     }, {
                        "r" : "43",
                        "value" : [ " + ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "44",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "42",
                  "name" : "Two",
                  "type" : "ExpressionRef"
               }, {
                  "localId" : "43",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "64",
            "name" : "SortUsingFunction",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","SortUsingFunction",":\n  " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "s" : [ {
                           "r" : "52",
                           "s" : [ {
                              "r" : "51",
                              "s" : [ {
                                 "value" : [ "(" ]
                              }, {
                                 "r" : "51",
                                 "s" : [ {
                                    "r" : "46",
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
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "return " ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "N",": " ]
                              }, {
                                 "r" : "53",
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
                        "r" : "62",
                        "s" : [ {
                           "value" : [ "sort by " ]
                        }, {
                           "r" : "61",
                           "s" : [ {
                              "r" : "60",
                              "s" : [ {
                                 "value" : [ "square","(" ]
                              }, {
                                 "r" : "59",
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
            "expression" : {
               "localId" : "63",
               "type" : "Query",
               "source" : [ {
                  "localId" : "52",
                  "alias" : "N",
                  "expression" : {
                     "localId" : "51",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "46",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "47",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "48",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "49",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "50",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     } ]
                  }
               } ],
               "relationship" : [ ],
               "return" : {
                  "localId" : "55",
                  "expression" : {
                     "localId" : "54",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "N",
                        "value" : {
                           "localId" : "53",
                           "name" : "N",
                           "type" : "AliasRef"
                        }
                     } ]
                  }
               },
               "sort" : {
                  "localId" : "62",
                  "by" : [ {
                     "localId" : "61",
                     "direction" : "asc",
                     "type" : "ByExpression",
                     "expression" : {
                        "localId" : "60",
                        "name" : "square",
                        "type" : "FunctionRef",
                        "operand" : [ {
                           "localId" : "59",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "39",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "includes" : {
         "def" : [ {
            "localId" : "2",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
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
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "5",
            "name" : "ExprUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParam",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "TheParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "name" : "TheParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "8",
            "name" : "ExprUsesParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesParamDirectly",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "SomeNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "name" : "SomeNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "11",
            "name" : "ExprUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParam",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "AnotherParameter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "name" : "AnotherParameter",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "14",
            "name" : "ExprUsesAnotherParamDirectly",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesAnotherParamDirectly",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "AnotherNumber" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "name" : "AnotherNumber",
               "libraryName" : "common2",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "18",
            "name" : "FuncUsesAnotherParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesAnotherParam",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "addToAnotherParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "name" : "addToAnotherParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "16",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "22",
            "name" : "FuncUsesParam",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesParam",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "r" : "20",
                           "value" : [ "addToParameter","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "name" : "addToParameter",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "20",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "ExprCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","ExprCallsFunc",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "TwoTimesThree" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "name" : "TwoTimesThree",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "29",
            "name" : "FuncCallsFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "","define ","FuncCallsFunc",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "r" : "27",
                           "value" : [ "square","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "name" : "square",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "27",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "32",
            "name" : "ExprUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","ExprUsesExpr",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "TwoPlusOne" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "name" : "TwoPlusOne",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "36",
            "name" : "FuncUsesExpr",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "","define ","FuncUsesExpr",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "addTwo","(","5",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "35",
               "name" : "addTwo",
               "libraryName" : "common2",
               "type" : "FunctionRef",
               "operand" : [ {
                  "localId" : "34",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "ExprSortsOnFunc",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","ExprSortsOnFunc",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
            "localIdentifier" : "System",
            "uri" : "urn:hl7-org:elm-types:r1"
         }, {
            "localId" : "1",
            "localIdentifier" : "Simple",
            "uri" : "https://github.com/cqframework/cql-execution/simple",
            "version" : "1.0.0",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "1",
                  "s" : [ {
                     "value" : [ "","using " ]
                  }, {
                     "s" : [ {
                        "value" : [ "Simple" ]
                     } ]
                  }, {
                     "value" : [ " version ","'1.0.0'" ]
                  } ]
               }
            } ]
         } ]
      },
      "includes" : {
         "def" : [ {
            "localId" : "2",
            "localIdentifier" : "common2",
            "path" : "Common2",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
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
            "localId" : "3",
            "localIdentifier" : "common",
            "path" : "Common",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
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
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "type" : "SingletonFrom",
               "operand" : {
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve"
               }
            }
         }, {
            "localId" : "6",
            "name" : "testCommonLib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "","define ","testCommonLib",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "common" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "SupportLibDef" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "name" : "SupportLibDef",
               "libraryName" : "common",
               "type" : "ExpressionRef"
            }
         }, {
            "localId" : "9",
            "name" : "testCommon2Lib",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","testCommon2Lib",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "common2" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "SortUsingFunction" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "name" : "SortUsingFunction",
               "libraryName" : "common2",
               "type" : "ExpressionRef"
            }
         } ]
      }
   }
}

