/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* IsSystemType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define FiveIsInteger: 5 is Integer
define FiveIsString: 5 is String
define StringFiveIsInteger: '5' is Integer
define StringFiveIsString: '5' is String
*/

module.exports['IsSystemType'] = {
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
        "r" : "233",
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
        "name" : "FiveIsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "FiveIsInteger", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " is " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FiveIsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "FiveIsString", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "222",
                "value" : [ "5", " is " ]
              }, {
                "r" : "223",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "226",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StringFiveIsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "StringFiveIsInteger", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "r" : "228",
                "s" : [ {
                  "value" : [ "'5'" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "230",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "233",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StringFiveIsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "233",
            "s" : [ {
              "value" : [ "", "define ", "StringFiveIsString", ": " ]
            }, {
              "r" : "234",
              "s" : [ {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'5'" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "237",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "234",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* IsListType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ListOfIntegersIsListOfIntegers: {1, 2, 3, 4, 5} is List<Integer>
define ListOfDecimalsIsListOfIntegers: {1.5, 2.5, 3.5, 4.5, 5.5} is List<Integer>
*/

module.exports['IsListType'] = {
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
        "r" : "230",
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
        "name" : "ListOfIntegersIsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "ListOfIntegersIsListOfIntegers", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "s" : [ {
                  "r" : "217",
                  "value" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "224",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "225",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "List",
            "localId" : "216",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "222",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "223",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "219",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "3",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "4",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "221",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "224",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "226",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "227",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "ListOfDecimalsIsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "ListOfDecimalsIsListOfIntegers", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "r" : "233",
                  "value" : [ "{", "1.5", ", ", "2.5", ", ", "3.5", ", ", "4.5", ", ", "5.5", "}" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "240",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "List",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "238",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "239",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "234",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "2.5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "3.5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "236",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "4.5",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5",
              "annotation" : [ ]
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "240",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "242",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "243",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* IsIntervalType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IntervalOfIntegersIsIntervalOfIntegers: Interval[1, 5] is Interval<Integer>
define IntervalOfDecimalsIsIntervalOfIntegers: Interval[1.5, 5.5] is Interval<Integer>
*/

module.exports['IsIntervalType'] = {
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
        "r" : "227",
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
        "name" : "IntervalOfIntegersIsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "IntervalOfIntegersIsIntervalOfIntegers", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "218",
                "s" : [ {
                  "r" : "216",
                  "value" : [ "Interval[", "1", ", ", "5", "]" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "221",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Interval",
            "localId" : "218",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "219",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "220",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "221",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "223",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "224",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "IntervalOfDecimalsIsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "IntervalOfDecimalsIsIntervalOfIntegers", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "r" : "231",
                "s" : [ {
                  "r" : "229",
                  "value" : [ "Interval[", "1.5", ", ", "5.5", "]" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "234",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "235",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Interval",
            "localId" : "231",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "232",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "233",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "Literal",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "1.5",
              "annotation" : [ ]
            },
            "high" : {
              "type" : "Literal",
              "localId" : "230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5",
              "annotation" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "234",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "236",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "235",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* IsTupleType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TupleOfIntegersIsTupleOfIntegers: Tuple{ a: 1, b: 2 } is Tuple{a Integer, b Integer}
define TupleOfDecimalsIsTupleOfIntegers: Tuple{ a: 1.5, b: 2.5 } is Tuple{a Integer, b Integer}
*/

module.exports['IsTupleType'] = {
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
        "r" : "236",
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
        "name" : "TupleOfIntegersIsTupleOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "TupleOfIntegersIsTupleOfIntegers", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "s" : [ {
                  "value" : [ "Tuple{ " ]
                }, {
                  "s" : [ {
                    "r" : "217",
                    "value" : [ "a", ": ", "1" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "218",
                    "value" : [ "b", ": ", "2" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "224",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "225",
                  "s" : [ {
                    "value" : [ "a", " " ]
                  }, {
                    "r" : "226",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "227",
                  "s" : [ {
                    "value" : [ "b", " " ]
                  }, {
                    "r" : "228",
                    "s" : [ {
                      "value" : [ "Integer" ]
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
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Tuple",
            "localId" : "216",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "219",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "220",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "222",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "217",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "218",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "224",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "229",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "230",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "232",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "225",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "226",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "227",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "228",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "TupleOfDecimalsIsTupleOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "TupleOfDecimalsIsTupleOfIntegers", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "238",
                "s" : [ {
                  "value" : [ "Tuple{ " ]
                }, {
                  "s" : [ {
                    "r" : "239",
                    "value" : [ "a", ": ", "1.5" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "s" : [ {
                    "r" : "240",
                    "value" : [ "b", ": ", "2.5" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "246",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "247",
                  "s" : [ {
                    "value" : [ "a", " " ]
                  }, {
                    "r" : "248",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "249",
                  "s" : [ {
                    "value" : [ "b", " " ]
                  }, {
                    "r" : "250",
                    "s" : [ {
                      "value" : [ "Integer" ]
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
          "type" : "Is",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Tuple",
            "localId" : "238",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "241",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "242",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "243",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "244",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "name" : "a",
              "value" : {
                "type" : "Literal",
                "localId" : "239",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "1.5",
                "annotation" : [ ]
              }
            }, {
              "name" : "b",
              "value" : {
                "type" : "Literal",
                "localId" : "240",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                "value" : "2.5",
                "annotation" : [ ]
              }
            } ]
          },
          "isTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "246",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "251",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "252",
                "name" : "a",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "254",
                "name" : "b",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "247",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "248",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "249",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "250",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      } ]
    }
  }
}

/* IsChoiceType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IntegerIsChoiceOfIntegersAndDecimals: 5 is Choice<Integer, Decimal>
define DecimalIsChoiceOfIntegersAndDecimals: 5.5 is Choice<Integer, Decimal>
define StringIsChoiceOfIntegersAndDecimals: 'Foo' is Choice<Integer, Decimal>
*/

module.exports['IsChoiceType'] = {
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
        "r" : "236",
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
        "name" : "IntegerIsChoiceOfIntegersAndDecimals",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "IntegerIsChoiceOfIntegersAndDecimals", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "value" : [ "5", " is " ]
              }, {
                "r" : "219",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "217",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "219",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "220",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "221",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "DecimalIsChoiceOfIntegersAndDecimals",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define ", "DecimalIsChoiceOfIntegersAndDecimals", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "r" : "227",
                "value" : [ "5.5", " is " ]
              }, {
                "r" : "230",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "228",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "229",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
            "value" : "5.5",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "230",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "233",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StringIsChoiceOfIntegersAndDecimals",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "StringIsChoiceOfIntegersAndDecimals", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "238",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "242",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "240",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "Decimal" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Literal",
            "localId" : "238",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          },
          "isTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "242",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "243",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "244",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "245",
                "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "name" : "{urn:hl7-org:elm-types:r1}Decimal",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* IsCustomDataModelType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define EncounterIsEncounter: First([Encounter]) is Simple.Encounter
define EncounterIsRecord: First([Encounter]) is Simple.Record
define EncounterIsAny: First([Encounter]) is System.Any
define EncounterIsCondition: First([Encounter]) is Simple.Condition
define EncounterIsString: First([Encounter]) is System.String
*/

module.exports['IsCustomDataModelType'] = {
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
        "r" : "274",
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
        "name" : "EncounterIsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "EncounterIsEncounter", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "223",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "216",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "226",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "223",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "224",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "225",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "216",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "217",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "218",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "226",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "229",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EncounterIsRecord",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "229",
            "s" : [ {
              "value" : [ "", "define ", "EncounterIsRecord", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "r" : "238",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "231",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "241",
                "s" : [ {
                  "value" : [ "Simple", ".", "Record" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "238",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "239",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "240",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "231",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "232",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "233",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "244",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EncounterIsAny",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "EncounterIsAny", ": " ]
            }, {
              "r" : "245",
              "s" : [ {
                "r" : "253",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "256",
                "s" : [ {
                  "value" : [ "System", ".", "Any" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "245",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "253",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "254",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "255",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "246",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "247",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "248",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "259",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EncounterIsCondition",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define ", "EncounterIsCondition", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "r" : "268",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "261",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "Simple", ".", "Condition" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "260",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "268",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "269",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "261",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "262",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "263",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EncounterIsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "EncounterIsString", ": " ]
            }, {
              "r" : "275",
              "s" : [ {
                "r" : "283",
                "s" : [ {
                  "value" : [ "First", "(" ]
                }, {
                  "r" : "276",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " is " ]
              }, {
                "r" : "286",
                "s" : [ {
                  "value" : [ "System", ".", "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Is",
          "localId" : "275",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "First",
            "localId" : "283",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "ListTypeSpecifier",
              "localId" : "284",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "285",
                "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ]
              }
            } ],
            "source" : {
              "type" : "Retrieve",
              "localId" : "276",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "277",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "278",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            }
          },
          "isTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* AsSystemType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define FiveAsInteger: Echo(5) as Integer
define FiveAsString: Echo(5) as String
define StringFiveAsInteger: Echo('5') as Integer
define StringFiveAsString: Echo('5') as String
define ListAsInteger: Echo({5}) as Integer
define IntervalAsInteger: Echo(Interval[1, 5]) as Integer
define TupleAsInteger: Echo(Tuple{A: 5}) as Integer
define CastFiveAsInteger: cast Echo(5) as Integer
define CastFiveAsString: cast Echo(5) as String
define CastStringFiveAsInteger: cast Echo('5') as Integer
define CastStringFiveAsString: cast Echo('5') as String
define CastListAsInteger: cast Echo({5}) as Integer
define CastIntervalAsInteger: cast Echo(Interval[1, 5]) as Integer
define CastTupleAsInteger: cast Echo(Tuple{A: 5}) as Integer
*/

module.exports['AsSystemType'] = {
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FiveAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "FiveAsInteger", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "223",
                "s" : [ {
                  "r" : "222",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "224",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "FiveAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "FiveAsString", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "r" : "231",
                "s" : [ {
                  "r" : "230",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "236",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "StringFiveAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "236",
            "s" : [ {
              "value" : [ "", "define ", "StringFiveAsInteger", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "r" : "240",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "238",
                  "s" : [ {
                    "value" : [ "'5'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "242",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "241",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "238",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "245",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "StringFiveAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "245",
            "s" : [ {
              "value" : [ "", "define ", "StringFiveAsString", ": " ]
            }, {
              "r" : "246",
              "s" : [ {
                "r" : "249",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "247",
                  "s" : [ {
                    "value" : [ "'5'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "251",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "246",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "250",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "247",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ListAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "ListAsInteger", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "260",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "256",
                  "s" : [ {
                    "r" : "257",
                    "value" : [ "{", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "262",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "256",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "258",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "257",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "265",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntervalAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "265",
            "s" : [ {
              "value" : [ "", "define ", "IntervalAsInteger", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "r" : "272",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "r" : "267",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "274",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "272",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "273",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "269",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "270",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "267",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "268",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "277",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "TupleAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "277",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsInteger", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "r" : "284",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "279",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "280",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "286",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "278",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "284",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "285",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "279",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "281",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "282",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "283",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "289",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CastFiveAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "289",
            "s" : [ {
              "value" : [ "", "define ", "CastFiveAsInteger", ": " ]
            }, {
              "r" : "290",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "292",
                "s" : [ {
                  "r" : "291",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "294",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "290",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "293",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "291",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "294",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "297",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CastFiveAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "297",
            "s" : [ {
              "value" : [ "", "define ", "CastFiveAsString", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "300",
                "s" : [ {
                  "r" : "299",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "302",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "298",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "301",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "299",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "305",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CastStringFiveAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "305",
            "s" : [ {
              "value" : [ "", "define ", "CastStringFiveAsInteger", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "309",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "307",
                  "s" : [ {
                    "value" : [ "'5'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "311",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "306",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "310",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "307",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "314",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CastStringFiveAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "314",
            "s" : [ {
              "value" : [ "", "define ", "CastStringFiveAsString", ": " ]
            }, {
              "r" : "315",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "318",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "316",
                  "s" : [ {
                    "value" : [ "'5'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "320",
                "s" : [ {
                  "value" : [ "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "315",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "316",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "320",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "323",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CastListAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "323",
            "s" : [ {
              "value" : [ "", "define ", "CastListAsInteger", ": " ]
            }, {
              "r" : "324",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "325",
                  "s" : [ {
                    "r" : "326",
                    "value" : [ "{", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "331",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "324",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "325",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "327",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "326",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CastIntervalAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalAsInteger", ": " ]
            }, {
              "r" : "335",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "341",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "338",
                  "s" : [ {
                    "r" : "336",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "343",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "335",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "342",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "338",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "339",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "340",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "336",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "337",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "346",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "CastTupleAsInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "346",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleAsInteger", ": " ]
            }, {
              "r" : "347",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "353",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "348",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "349",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "355",
                "s" : [ {
                  "value" : [ "Integer" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "347",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "353",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "354",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "348",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "350",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "351",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "352",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "349",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* AsListType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define ListOfIntegersAsListOfIntegers: Echo({1, 2, 3, 4, 5}) as List<Integer>
define ListOfStringsAsListOfIntegers: Echo({'a', 'b', 'c', 'd'}) as List<Integer>
define IntegerAsListOfIntegers: Echo(5) as List<Integer>
define IntervalAsListOfIntegers: Echo(Interval[1, 5]) as List<Integer>
define TupleAsListOfIntegers: Echo(Tuple{A: 5}) as List<Integer>
define CastListOfIntegersAsListOfIntegers: cast Echo({1, 2, 3, 4, 5}) as List<Integer>
define CastListOfStringsAsListOfIntegers: cast Echo({'a', 'b', 'c', 'd'}) as List<Integer>
define CastIntegerAsListOfIntegers: cast Echo(5) as List<Integer>
define CastIntervalAsListOfIntegers: cast Echo(Interval[1, 5]) as List<Integer>
define CastTupleAsListOfIntegers: cast Echo(Tuple{A: 5}) as List<Integer>
*/

module.exports['AsListType'] = {
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
        "r" : "401",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "name" : "ListOfIntegersAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "ListOfIntegersAsListOfIntegers", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "230",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "r" : "223",
                    "value" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "232",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "233",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "238",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "236",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "237",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "231",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "222",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "228",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "223",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "224",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "225",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "226",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "227",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "232",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "234",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "235",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "242",
        "name" : "ListOfStringsAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "ListOfStringsAsListOfIntegers", ": " ]
            }, {
              "r" : "243",
              "s" : [ {
                "r" : "255",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "244",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "245",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "247",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "249",
                    "s" : [ {
                      "value" : [ "'c'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "251",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "258",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "263",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "264",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "243",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "261",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "262",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "244",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "253",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "245",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "247",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "249",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "251",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "257",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "259",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "260",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "258",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "267",
        "name" : "IntegerAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "267",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAsListOfIntegers", ": " ]
            }, {
              "r" : "268",
              "s" : [ {
                "r" : "270",
                "s" : [ {
                  "r" : "269",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "272",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "273",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "278",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "268",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "276",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "277",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "271",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "272",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "274",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "275",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "282",
        "name" : "IntervalAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "282",
            "s" : [ {
              "value" : [ "", "define ", "IntervalAsListOfIntegers", ": " ]
            }, {
              "r" : "283",
              "s" : [ {
                "r" : "289",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "286",
                  "s" : [ {
                    "r" : "284",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "291",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "292",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "297",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "283",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "295",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "286",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "287",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "288",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "284",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "285",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "291",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "293",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "294",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "301",
        "name" : "TupleAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "301",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsListOfIntegers", ": " ]
            }, {
              "r" : "302",
              "s" : [ {
                "r" : "308",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "303",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "304",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "310",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "316",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "302",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "314",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "315",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "308",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "303",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "305",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "306",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "307",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "310",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "312",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "313",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "320",
        "name" : "CastListOfIntegersAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "320",
            "s" : [ {
              "value" : [ "", "define ", "CastListOfIntegersAsListOfIntegers", ": " ]
            }, {
              "r" : "321",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "330",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "322",
                  "s" : [ {
                    "r" : "323",
                    "value" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "332",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "333",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "338",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "339",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "321",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "336",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "337",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "331",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "322",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "328",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "323",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "324",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "325",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "326",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "327",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "332",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "334",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "335",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "333",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "342",
        "name" : "CastListOfStringsAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "CastListOfStringsAsListOfIntegers", ": " ]
            }, {
              "r" : "343",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "355",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "344",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "r" : "345",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "347",
                    "s" : [ {
                      "value" : [ "'b'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "349",
                    "s" : [ {
                      "value" : [ "'c'" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "r" : "351",
                    "s" : [ {
                      "value" : [ "'d'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "357",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "358",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "363",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "364",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "343",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "361",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "362",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "356",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "344",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "353",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "345",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "347",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "b",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "349",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "c",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "351",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "d",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "357",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "359",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "360",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "358",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "367",
        "name" : "CastIntegerAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "367",
            "s" : [ {
              "value" : [ "", "define ", "CastIntegerAsListOfIntegers", ": " ]
            }, {
              "r" : "368",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "370",
                "s" : [ {
                  "r" : "369",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "372",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "373",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "378",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "379",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "368",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "376",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "377",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "370",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "371",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "369",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "372",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "374",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "375",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "382",
        "name" : "CastIntervalAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "382",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalAsListOfIntegers", ": " ]
            }, {
              "r" : "383",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "389",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "386",
                  "s" : [ {
                    "r" : "384",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "391",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "392",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "397",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "398",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "383",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "395",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "396",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "389",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "390",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "386",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "387",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "388",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "384",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "385",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "391",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "393",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "394",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "392",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "401",
        "name" : "CastTupleAsListOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "401",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleAsListOfIntegers", ": " ]
            }, {
              "r" : "402",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "408",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "403",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "404",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "410",
                "s" : [ {
                  "value" : [ "List<" ]
                }, {
                  "r" : "411",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "416",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "417",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "402",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "414",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "408",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "409",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "403",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "405",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "406",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "407",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "404",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "410",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "412",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "413",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "411",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* AsIntervalType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define IntervalOfIntegersAsIntervalOfIntegers: Echo(Interval[1, 5]) as Interval<Integer>
define IntervalOfDatesAsIntervalOfIntegers: Echo(Interval[@2000-01-01, @2000-12-31]) as Interval<Integer>
define IntegerAsIntervalOfIntegers: Echo(5) as Interval<Integer>
define ListAsIntervalOfIntegers: Echo({1, 2, 3, 4, 5}) as Interval<Integer>
define TupleAsIntervalOfIntegers: Echo(Tuple{A: 5}) as Interval<Integer>
define CastIntervalOfIntegersAsIntervalOfIntegers: cast Echo(Interval[1, 5]) as Interval<Integer>
define CastIntervalOfDatesAsIntervalOfIntegers: cast Echo(Interval[@2000-01-01, @2000-12-31]) as Interval<Integer>
define CastIntegerAsIntervalOfIntegers: cast Echo(5) as Interval<Integer>
define CastListAsIntervalOfIntegers: cast Echo({1, 2, 3, 4, 5}) as Interval<Integer>
define CastTupleAsIntervalOfIntegers: cast Echo(Tuple{A: 5}) as Interval<Integer>
*/

module.exports['AsIntervalType'] = {
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
        "r" : "405",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "name" : "IntervalOfIntegersAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "IntervalOfIntegersAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "227",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "224",
                  "s" : [ {
                    "r" : "222",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "230",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "235",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "233",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "228",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "224",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "225",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "222",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "223",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "229",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "230",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "239",
        "name" : "IntervalOfDatesAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "IntervalOfDatesAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "254",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "251",
                  "s" : [ {
                    "r" : "245",
                    "value" : [ "Interval[", "@2000-01-01", ", ", "@2000-12-31", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "256",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "262",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "240",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "260",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "261",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "255",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "251",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "252",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Date",
                "localId" : "245",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "242",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "243",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "244",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              },
              "high" : {
                "type" : "Date",
                "localId" : "250",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "247",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "248",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "31",
                  "annotation" : [ ]
                }
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "256",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "258",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "259",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "257",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "266",
        "name" : "IntegerAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "266",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "267",
              "s" : [ {
                "r" : "269",
                "s" : [ {
                  "r" : "268",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "272",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "277",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "267",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "275",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "276",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "270",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "268",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "271",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "273",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "274",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "281",
        "name" : "ListAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "281",
            "s" : [ {
              "value" : [ "", "define ", "ListAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "r" : "291",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "r" : "284",
                    "value" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "293",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "294",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "299",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "300",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "282",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "297",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "298",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "292",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "283",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "289",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "284",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "285",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "286",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "287",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "288",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "293",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "295",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "296",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "303",
        "name" : "TupleAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "303",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "304",
              "s" : [ {
                "r" : "310",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "305",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "306",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "312",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "313",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "318",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "304",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "316",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "317",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "305",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "307",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "308",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "309",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "312",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "314",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "315",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "322",
        "name" : "CastIntervalOfIntegersAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "322",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalOfIntegersAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "323",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "329",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "326",
                  "s" : [ {
                    "r" : "324",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "331",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "332",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "337",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "338",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "323",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "335",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "336",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "329",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "326",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "327",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "328",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "324",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "325",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "331",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "333",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "334",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "332",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "341",
        "name" : "CastIntervalOfDatesAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "341",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalOfDatesAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "342",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "356",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "353",
                  "s" : [ {
                    "r" : "347",
                    "value" : [ "Interval[", "@2000-01-01", ", ", "@2000-12-31", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "358",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "359",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "364",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "365",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "342",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "362",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "363",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "356",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "353",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "354",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Date",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Date",
                "localId" : "347",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "344",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "345",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "346",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              },
              "high" : {
                "type" : "Date",
                "localId" : "352",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                "annotation" : [ ],
                "signature" : [ ],
                "year" : {
                  "type" : "Literal",
                  "localId" : "349",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2000",
                  "annotation" : [ ]
                },
                "month" : {
                  "type" : "Literal",
                  "localId" : "350",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "annotation" : [ ]
                },
                "day" : {
                  "type" : "Literal",
                  "localId" : "351",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "31",
                  "annotation" : [ ]
                }
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "358",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "360",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "361",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "359",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "368",
        "name" : "CastIntegerAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "368",
            "s" : [ {
              "value" : [ "", "define ", "CastIntegerAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "369",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "371",
                "s" : [ {
                  "r" : "370",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "373",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "374",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "379",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "380",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "369",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "378",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "371",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "372",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "370",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "373",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "375",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "376",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "374",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "383",
        "name" : "CastListAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "383",
            "s" : [ {
              "value" : [ "", "define ", "CastListAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "384",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "393",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "385",
                  "s" : [ {
                    "r" : "386",
                    "value" : [ "{", "1", ", ", "2", ", ", "3", ", ", "4", ", ", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "395",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "396",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "401",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "402",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "384",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "399",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "400",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "393",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "394",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "385",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "391",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "392",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "386",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "387",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "388",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "3",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "389",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "4",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "390",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "395",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "397",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "398",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "396",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "405",
        "name" : "CastTupleAsIntervalOfIntegers",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "405",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleAsIntervalOfIntegers", ": " ]
            }, {
              "r" : "406",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "412",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "407",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "408",
                      "value" : [ "A", ": ", "5" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "414",
                "s" : [ {
                  "value" : [ "Interval<" ]
                }, {
                  "r" : "415",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "420",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "421",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "As",
          "localId" : "406",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "418",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "419",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "412",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "413",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "407",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "409",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "410",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "411",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "408",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "414",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "416",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "417",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            },
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* AsTupleType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define TupleOfAIntegerBStringAsTupleOfAIntegerBString: Echo(Tuple{ A: 1, B: '2' }) as Tuple{A Integer, B String}
define TupleOfAStringBIntegerAsTupleOfAIntegerBString: Echo(Tuple{ A: '1', B: 2 }) as Tuple{A Integer, B String}
define IntegerAsTupleOfInteger: Echo(5) as Tuple{A Integer}
define ListAsTupleOfInteger: Echo({5}) as Tuple{A Integer}
define IntervalAsTupleOfInteger: Echo(Interval[1, 5]) as Tuple{A Integer}
define CastTupleOfAIntegerBStringAsTupleOfAIntegerBString: cast Echo(Tuple{ A: 1, B: '2' }) as Tuple{A Integer, B String}
define CastTupleOfAStringBIntegerAsTupleOfAIntegerBString: cast Echo(Tuple{ A: '1', B: 2 }) as Tuple{A Integer, B String}
define CastIntegerAsTupleOfInteger: cast Echo(5) as Tuple{A Integer}
define CastListAsTupleOfInteger: cast Echo({5}) as Tuple{A Integer}
define CastIntervalAsTupleOfInteger: cast Echo(Interval[1, 5]) as Tuple{A Integer}
*/

module.exports['AsTupleType'] = {
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
        "r" : "465",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "name" : "TupleOfAIntegerBStringAsTupleOfAIntegerBString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "TupleOfAIntegerBStringAsTupleOfAIntegerBString", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "231",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "value" : [ "Tuple{ " ]
                  }, {
                    "s" : [ {
                      "r" : "223",
                      "value" : [ "A", ": ", "1" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "B", ": " ]
                    }, {
                      "r" : "224",
                      "s" : [ {
                        "value" : [ "'2'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "234",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "235",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "B", " " ]
                  }, {
                    "r" : "237",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "248",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "249",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "250",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "251",
            "name" : "B",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "252",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "243",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "244",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "245",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "246",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "247",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "222",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "226",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "227",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "228",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "229",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "230",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "233",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "238",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "239",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "241",
                "name" : "B",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "242",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "234",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "236",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "255",
        "name" : "TupleOfAStringBIntegerAsTupleOfAIntegerBString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "255",
            "s" : [ {
              "value" : [ "", "define ", "TupleOfAStringBIntegerAsTupleOfAIntegerBString", ": " ]
            }, {
              "r" : "256",
              "s" : [ {
                "r" : "266",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "257",
                  "s" : [ {
                    "value" : [ "Tuple{ " ]
                  }, {
                    "s" : [ {
                      "value" : [ "A", ": " ]
                    }, {
                      "r" : "258",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "r" : "260",
                      "value" : [ "B", ": ", "2" ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "268",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "269",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "270",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "271",
                  "s" : [ {
                    "value" : [ "B", " " ]
                  }, {
                    "r" : "272",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "283",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "284",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "285",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "286",
            "name" : "B",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "256",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "278",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "279",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "280",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "281",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "282",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "257",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "261",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "262",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "263",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "264",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "265",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "258",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "268",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "273",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "274",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "276",
                "name" : "B",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "277",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "269",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "270",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "271",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "290",
        "name" : "IntegerAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "290",
            "s" : [ {
              "value" : [ "", "define ", "IntegerAsTupleOfInteger", ": " ]
            }, {
              "r" : "291",
              "s" : [ {
                "r" : "293",
                "s" : [ {
                  "r" : "292",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "295",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "296",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "297",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "304",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "305",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "306",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "291",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "301",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "302",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "303",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "294",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "292",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "295",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "298",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "299",
                "name" : "A",
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
              "localId" : "296",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "297",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "309",
        "name" : "ListAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "309",
            "s" : [ {
              "value" : [ "", "define ", "ListAsTupleOfInteger", ": " ]
            }, {
              "r" : "310",
              "s" : [ {
                "r" : "315",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "r" : "312",
                    "value" : [ "{", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "317",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "318",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "319",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "326",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "327",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "328",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "310",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "323",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "324",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "325",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "315",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "316",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "311",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "313",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "314",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "312",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "317",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "320",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "321",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "318",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "319",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "331",
        "name" : "IntervalAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "331",
            "s" : [ {
              "value" : [ "", "define ", "IntervalAsTupleOfInteger", ": " ]
            }, {
              "r" : "332",
              "s" : [ {
                "r" : "338",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "335",
                  "s" : [ {
                    "r" : "333",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "340",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "341",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "342",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "349",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "350",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "351",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "332",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "346",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "347",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "348",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "338",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "339",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "335",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "336",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "333",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "334",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "340",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "343",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "344",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "345",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "341",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "354",
        "name" : "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "354",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString", ": " ]
            }, {
              "r" : "355",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "365",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "356",
                  "s" : [ {
                    "value" : [ "Tuple{ " ]
                  }, {
                    "s" : [ {
                      "r" : "357",
                      "value" : [ "A", ": ", "1" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "B", ": " ]
                    }, {
                      "r" : "358",
                      "s" : [ {
                        "value" : [ "'2'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "367",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "368",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "369",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "370",
                  "s" : [ {
                    "value" : [ "B", " " ]
                  }, {
                    "r" : "371",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "382",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "383",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "384",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "385",
            "name" : "B",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "386",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "355",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "377",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "378",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "379",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "380",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "381",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "365",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "366",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "356",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "360",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "361",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "362",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "363",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "364",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "357",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "358",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "367",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "372",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "373",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "374",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "375",
                "name" : "B",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "376",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "368",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "369",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "370",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "371",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "389",
        "name" : "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "389",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString", ": " ]
            }, {
              "r" : "390",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "400",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "391",
                  "s" : [ {
                    "value" : [ "Tuple{ " ]
                  }, {
                    "s" : [ {
                      "value" : [ "A", ": " ]
                    }, {
                      "r" : "392",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "r" : "394",
                      "value" : [ "B", ": ", "2" ]
                    } ]
                  }, {
                    "value" : [ " }" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "402",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "403",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "404",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "405",
                  "s" : [ {
                    "value" : [ "B", " " ]
                  }, {
                    "r" : "406",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "417",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "418",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "419",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "420",
            "name" : "B",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "421",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "390",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "412",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "413",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "414",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "415",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "416",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "400",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "401",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "391",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "395",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "396",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "397",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "398",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "399",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "392",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "402",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "407",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "408",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "409",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "410",
                "name" : "B",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "411",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "403",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "404",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "405",
              "name" : "B",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "406",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "424",
        "name" : "CastIntegerAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "424",
            "s" : [ {
              "value" : [ "", "define ", "CastIntegerAsTupleOfInteger", ": " ]
            }, {
              "r" : "425",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "427",
                "s" : [ {
                  "r" : "426",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "429",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "430",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "431",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "438",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "439",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "440",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "425",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "435",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "436",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "437",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "427",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "428",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "426",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "429",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "432",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "433",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "434",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "430",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "431",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "443",
        "name" : "CastListAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "443",
            "s" : [ {
              "value" : [ "", "define ", "CastListAsTupleOfInteger", ": " ]
            }, {
              "r" : "444",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "449",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "445",
                  "s" : [ {
                    "r" : "446",
                    "value" : [ "{", "5", "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "451",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "452",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "453",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "460",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "461",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "462",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "444",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "457",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "458",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "459",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "449",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "450",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "445",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "447",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "448",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "446",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "451",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "454",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "455",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "456",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "452",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "453",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      }, {
        "localId" : "465",
        "name" : "CastIntervalAsTupleOfInteger",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "465",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalAsTupleOfInteger", ": " ]
            }, {
              "r" : "466",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "472",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "469",
                  "s" : [ {
                    "r" : "467",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "474",
                "s" : [ {
                  "value" : [ "Tuple{" ]
                }, {
                  "r" : "475",
                  "s" : [ {
                    "value" : [ "A", " " ]
                  }, {
                    "r" : "476",
                    "s" : [ {
                      "value" : [ "Integer" ]
                    } ]
                  } ]
                }, {
                  "value" : [ "}" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "483",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "484",
            "name" : "A",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "485",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "466",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "480",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "481",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "482",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "472",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "473",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "469",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "470",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "471",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "467",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "468",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "474",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "477",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "478",
                "name" : "A",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "479",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              } ]
            },
            "element" : [ {
              "localId" : "475",
              "name" : "A",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "476",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          }
        }
      } ]
    }
  }
}

/* AsChoiceType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define IntegerAsChoiceOfIntegersAndStrings: Echo(5) as Choice<Integer, String>
define StringAsChoiceOfIntegersAndStrings: Echo('Foo') as Choice<Integer, String>
define DecimalAsChoiceOfIntegersAndStrings: Echo(5.5) as Choice<Integer, String>
define ListAsChoiceOfIntegersAndStrings: Echo({5, 'a'}) as Choice<Integer, String>
define IntervalAsChoiceOfIntegersAndStrings: Echo(Interval[1, 5]) as Choice<Integer, String>
define TupleAsChoiceOfIntegersAndStrings: Echo(Tuple{A: 1, B: '2'}) as Choice<Integer, String>
define CastIntegerAsChoiceOfIntegersAndStrings: cast Echo(5) as Choice<Integer, String>
define CastStringAsChoiceOfIntegersAndStrings: cast Echo('Foo') as Choice<Integer, String>
define CastDecimalAsChoiceOfIntegersAndStrings: cast Echo(5.5) as Choice<Integer, String>
define CastListAsChoiceOfIntegersAndStrings: cast Echo({5, 'a'}) as Choice<Integer, String>
define CastIntervalAsChoiceOfIntegersAndStrings: cast Echo(Interval[1, 5]) as Choice<Integer, String>
define CastTupleAsChoiceOfIntegersAndStrings: cast Echo(Tuple{A: 1, B: '2'}) as Choice<Integer, String>
*/

module.exports['AsChoiceType'] = {
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
        "r" : "457",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "name" : "IntegerAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "IntegerAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "223",
                "s" : [ {
                  "r" : "222",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "227",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "225",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "226",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "234",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "235",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "231",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "224",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "227",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "228",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "229",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "230",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "239",
        "name" : "StringAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "StringAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "r" : "243",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "'Foo'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "247",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "245",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "254",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "240",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "251",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "252",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "253",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "244",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Foo",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "247",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "248",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "249",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "250",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "259",
        "name" : "DecimalAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define ", "DecimalAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "260",
              "s" : [ {
                "r" : "262",
                "s" : [ {
                  "r" : "261",
                  "value" : [ "Echo", "(", "5.5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "266",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "264",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "265",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "273",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "274",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "275",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "260",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "270",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "271",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "272",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "266",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "267",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "268",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "269",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "265",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "278",
        "name" : "ListAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "278",
            "s" : [ {
              "value" : [ "", "define ", "ListAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "r" : "286",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "280",
                  "s" : [ {
                    "r" : "281",
                    "value" : [ "{", "5", ", " ]
                  }, {
                    "r" : "282",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "290",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "289",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "297",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "279",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "294",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "295",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "296",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "287",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "280",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "284",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "285",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "281",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "282",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "290",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "291",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "292",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "293",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "302",
        "name" : "IntervalAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "302",
            "s" : [ {
              "value" : [ "", "define ", "IntervalAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "303",
              "s" : [ {
                "r" : "309",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "306",
                  "s" : [ {
                    "r" : "304",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "313",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "311",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "312",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "320",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "321",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "322",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "303",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "317",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "319",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "310",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "306",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "307",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "308",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "304",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "305",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "313",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "314",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "315",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "316",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "312",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "325",
        "name" : "TupleAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "325",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "326",
              "s" : [ {
                "r" : "336",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "327",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "328",
                      "value" : [ "A", ": ", "1" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "B", ": " ]
                    }, {
                      "r" : "329",
                      "s" : [ {
                        "value" : [ "'2'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "340",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "338",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "339",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "347",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "348",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "349",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "326",
          "strict" : false,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "344",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "345",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "346",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "337",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "327",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "331",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "332",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "333",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "334",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "335",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "340",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "341",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "342",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "343",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "338",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "339",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "352",
        "name" : "CastIntegerAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "352",
            "s" : [ {
              "value" : [ "", "define ", "CastIntegerAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "353",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "355",
                "s" : [ {
                  "r" : "354",
                  "value" : [ "Echo", "(", "5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "359",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "357",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "358",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "366",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "367",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "368",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "353",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "363",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "364",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "365",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "355",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "356",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "354",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "359",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "360",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "361",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "362",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "358",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "371",
        "name" : "CastStringAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "371",
            "s" : [ {
              "value" : [ "", "define ", "CastStringAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "372",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "375",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "373",
                  "s" : [ {
                    "value" : [ "'Foo'" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "379",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "377",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "378",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "386",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "387",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "388",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "372",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "383",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "384",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "385",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "375",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "376",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "373",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Foo",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "379",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "380",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "381",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "382",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "378",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "391",
        "name" : "CastDecimalAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "391",
            "s" : [ {
              "value" : [ "", "define ", "CastDecimalAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "392",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "394",
                "s" : [ {
                  "r" : "393",
                  "value" : [ "Echo", "(", "5.5", ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "398",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "396",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "397",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "405",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "406",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "407",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "392",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "402",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "403",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "404",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "394",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "395",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "393",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
              "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
              "value" : "5.5",
              "annotation" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "398",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "399",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "400",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "401",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "396",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "397",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "410",
        "name" : "CastListAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "410",
            "s" : [ {
              "value" : [ "", "define ", "CastListAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "411",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "418",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "412",
                  "s" : [ {
                    "r" : "413",
                    "value" : [ "{", "5", ", " ]
                  }, {
                    "r" : "414",
                    "s" : [ {
                      "value" : [ "'a'" ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "422",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "420",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "421",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "429",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "430",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "431",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "411",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "426",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "427",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "428",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "418",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "419",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "List",
              "localId" : "412",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "416",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                }
              },
              "element" : [ {
                "type" : "Literal",
                "localId" : "413",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }, {
                "type" : "Literal",
                "localId" : "414",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "a",
                "annotation" : [ ]
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "422",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "423",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "424",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "425",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "420",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "421",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "434",
        "name" : "CastIntervalAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "434",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "435",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "441",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "r" : "436",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "445",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "443",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "444",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "452",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "453",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "454",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "435",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "449",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "450",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "451",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "441",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "442",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "438",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "439",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "440",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "436",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "437",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "445",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "446",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "447",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "448",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "443",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "444",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "457",
        "name" : "CastTupleAsChoiceOfIntegersAndStrings",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "457",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleAsChoiceOfIntegersAndStrings", ": " ]
            }, {
              "r" : "458",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "468",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "459",
                  "s" : [ {
                    "value" : [ "Tuple{" ]
                  }, {
                    "s" : [ {
                      "r" : "460",
                      "value" : [ "A", ": ", "1" ]
                    } ]
                  }, {
                    "value" : [ ", " ]
                  }, {
                    "s" : [ {
                      "value" : [ "B", ": " ]
                    }, {
                      "r" : "461",
                      "s" : [ {
                        "value" : [ "'2'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "472",
                "s" : [ {
                  "value" : [ "Choice<" ]
                }, {
                  "r" : "470",
                  "s" : [ {
                    "value" : [ "Integer" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "471",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                }, {
                  "value" : [ ">" ]
                } ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ChoiceTypeSpecifier",
          "localId" : "479",
          "annotation" : [ ],
          "choice" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "480",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "481",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ]
        },
        "expression" : {
          "type" : "As",
          "localId" : "458",
          "strict" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "476",
            "annotation" : [ ],
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "477",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "478",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          },
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "468",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "469",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "459",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "463",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "464",
                  "name" : "A",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "465",
                    "name" : "{urn:hl7-org:elm-types:r1}Integer",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "466",
                  "name" : "B",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "467",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "A",
                "value" : {
                  "type" : "Literal",
                  "localId" : "460",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "annotation" : [ ]
                }
              }, {
                "name" : "B",
                "value" : {
                  "type" : "Literal",
                  "localId" : "461",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "2",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "ChoiceTypeSpecifier",
            "localId" : "472",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ChoiceTypeSpecifier",
              "localId" : "473",
              "annotation" : [ ],
              "choice" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "474",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "475",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ]
            },
            "choice" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "470",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "471",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ]
          }
        }
      } ]
    }
  }
}

/* AsCustomDataModelType
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define function Echo(Val Any): Val // fool CQL-to-ELM into letting the casts compile
define EncounterAsEncounter: Echo(First([Encounter])) as Simple.Encounter
define EncounterAsRecord: Echo(First([Encounter])) as Simple.Record
define EncounterAsAny: Echo(First([Encounter])) as System.Any
define EncounterAsCondition: Echo(First([Encounter])) as Simple.Condition
define EncounterAsString: Echo(First([Encounter])) as System.String
define ListAsEncounter: Echo([Encounter]) as Simple.Encounter
define IntervalAsEncounter: Echo(Interval[1, 5]) as Simple.Encounter
define TupleAsEncounter: Echo({id: '1'}) as Simple.Encounter
define NamedTupleAsEncounter: Echo(Encounter {id: '1'}) as Simple.Encounter
define CastEncounterAsEncounter: cast Echo(First([Encounter])) as Simple.Encounter
define CastEncounterAsRecord: cast Echo(First([Encounter])) as Simple.Record
define CastEncounterAsAny: cast Echo(First([Encounter])) as System.Any
define CastEncounterAsCondition: cast Echo(First([Encounter])) as Simple.Condition
define CastEncounterAsString: cast Echo(First([Encounter])) as System.String
define CastListAsEncounter: cast Echo([Encounter]) as Simple.Encounter
define CastIntervalAsEncounter: cast Echo(Interval[1, 5]) as Simple.Encounter
define CastTupleAsEncounter: cast Echo({id: '1'}) as Simple.Encounter
define CastNamedTupleAsEncounter: Echo(Encounter {id: '1'}) as Simple.Encounter
*/

module.exports['AsCustomDataModelType'] = {
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
        "r" : "471",
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
        "type" : "FunctionDef",
        "localId" : "212",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "Echo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "212",
            "s" : [ {
              "value" : [ "", "define function Echo(Val Any): " ]
            }, {
              "r" : "217",
              "s" : [ {
                "r" : "217",
                "s" : [ {
                  "value" : [ "Val" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "OperandRef",
          "localId" : "217",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "name" : "Val",
          "annotation" : [ ]
        },
        "operand" : [ {
          "localId" : "214",
          "name" : "Val",
          "annotation" : [ ],
          "operandTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        } ]
      }, {
        "localId" : "220",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "EncounterAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "// fool CQL-to-ELM into letting the casts compile\n", "define ", "EncounterAsEncounter", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "r" : "232",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "229",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "222",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "234",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "221",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "233",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "229",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "230",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "231",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "222",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "223",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "224",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "234",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "237",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
        "name" : "EncounterAsRecord",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "237",
            "s" : [ {
              "value" : [ "", "define ", "EncounterAsRecord", ": " ]
            }, {
              "r" : "238",
              "s" : [ {
                "r" : "249",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "246",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "239",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "251",
                "s" : [ {
                  "value" : [ "Simple", ".", "Record" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "238",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "249",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "250",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "246",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "247",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "248",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "239",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "240",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "241",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "251",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "254",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "EncounterAsAny",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "254",
            "s" : [ {
              "value" : [ "", "define ", "EncounterAsAny", ": " ]
            }, {
              "r" : "255",
              "s" : [ {
                "r" : "266",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "263",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "256",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "268",
                "s" : [ {
                  "value" : [ "System", ".", "Any" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "255",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "263",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "264",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "265",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "256",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "257",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "258",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "271",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
        "name" : "EncounterAsCondition",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "271",
            "s" : [ {
              "value" : [ "", "define ", "EncounterAsCondition", ": " ]
            }, {
              "r" : "272",
              "s" : [ {
                "r" : "283",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "280",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "273",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "285",
                "s" : [ {
                  "value" : [ "Simple", ".", "Condition" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "272",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "284",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "280",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "281",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "282",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "273",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "274",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "275",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "288",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "EncounterAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "288",
            "s" : [ {
              "value" : [ "", "define ", "EncounterAsString", ": " ]
            }, {
              "r" : "289",
              "s" : [ {
                "r" : "300",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "297",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "290",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "302",
                "s" : [ {
                  "value" : [ "System", ".", "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "289",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "301",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "297",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "298",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "299",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "290",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "291",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "292",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "305",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "ListAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "305",
            "s" : [ {
              "value" : [ "", "define ", "ListAsEncounter", ": " ]
            }, {
              "r" : "306",
              "s" : [ {
                "r" : "310",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "307",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "312",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "306",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "310",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "311",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Retrieve",
              "localId" : "307",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "308",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "309",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "312",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "315",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "IntervalAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "315",
            "s" : [ {
              "value" : [ "", "define ", "IntervalAsEncounter", ": " ]
            }, {
              "r" : "316",
              "s" : [ {
                "r" : "322",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "319",
                  "s" : [ {
                    "r" : "317",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "324",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "316",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "322",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "323",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "319",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "320",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "317",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "318",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "324",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "327",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "TupleAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "327",
            "s" : [ {
              "value" : [ "", "define ", "TupleAsEncounter", ": " ]
            }, {
              "r" : "328",
              "s" : [ {
                "r" : "335",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "329",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "330",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "337",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "328",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "335",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "336",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "329",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "332",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "333",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "334",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "id",
                "value" : {
                  "type" : "Literal",
                  "localId" : "330",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "337",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "340",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "NamedTupleAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "340",
            "s" : [ {
              "value" : [ "", "define ", "NamedTupleAsEncounter", ": " ]
            }, {
              "r" : "341",
              "s" : [ {
                "r" : "346",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "342",
                  "s" : [ {
                    "value" : [ "Encounter", " {" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "344",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "348",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "341",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "347",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Instance",
              "localId" : "342",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "element" : [ {
                "name" : "id",
                "value" : {
                  "type" : "Literal",
                  "localId" : "344",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "348",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "351",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "CastEncounterAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "351",
            "s" : [ {
              "value" : [ "", "define ", "CastEncounterAsEncounter", ": " ]
            }, {
              "r" : "352",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "363",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "360",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "353",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "365",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "352",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "364",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "360",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "361",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "362",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "353",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "354",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "355",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "365",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "368",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
        "name" : "CastEncounterAsRecord",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "368",
            "s" : [ {
              "value" : [ "", "define ", "CastEncounterAsRecord", ": " ]
            }, {
              "r" : "369",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "380",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "377",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "370",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "382",
                "s" : [ {
                  "value" : [ "Simple", ".", "Record" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "369",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "380",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "381",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "377",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "378",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "379",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "370",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "371",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "372",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "382",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "385",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
        "name" : "CastEncounterAsAny",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "385",
            "s" : [ {
              "value" : [ "", "define ", "CastEncounterAsAny", ": " ]
            }, {
              "r" : "386",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "397",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "394",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "387",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "399",
                "s" : [ {
                  "value" : [ "System", ".", "Any" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "386",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "397",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "398",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "394",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "395",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "396",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "387",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "388",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "389",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "399",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "{urn:hl7-org:elm-types:r1}Any",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "402",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
        "name" : "CastEncounterAsCondition",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "402",
            "s" : [ {
              "value" : [ "", "define ", "CastEncounterAsCondition", ": " ]
            }, {
              "r" : "403",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "414",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "411",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "404",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "416",
                "s" : [ {
                  "value" : [ "Simple", ".", "Condition" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "403",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "414",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "415",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "411",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "412",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "413",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "404",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "405",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "406",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "416",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "419",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CastEncounterAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "419",
            "s" : [ {
              "value" : [ "", "define ", "CastEncounterAsString", ": " ]
            }, {
              "r" : "420",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "431",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "428",
                  "s" : [ {
                    "value" : [ "First", "(" ]
                  }, {
                    "r" : "421",
                    "s" : [ {
                      "value" : [ "[", "Encounter", "]" ]
                    } ]
                  }, {
                    "value" : [ ")" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "433",
                "s" : [ {
                  "value" : [ "System", ".", "String" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "420",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "431",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "432",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "First",
              "localId" : "428",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "ListTypeSpecifier",
                "localId" : "429",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "430",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              } ],
              "source" : {
                "type" : "Retrieve",
                "localId" : "421",
                "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "422",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "423",
                    "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                    "annotation" : [ ]
                  }
                },
                "include" : [ ],
                "codeFilter" : [ ],
                "dateFilter" : [ ],
                "otherFilter" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "433",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "436",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "CastListAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "436",
            "s" : [ {
              "value" : [ "", "define ", "CastListAsEncounter", ": " ]
            }, {
              "r" : "437",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "441",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "438",
                  "s" : [ {
                    "value" : [ "[", "Encounter", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "443",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "437",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "441",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "442",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Retrieve",
              "localId" : "438",
              "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "439",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "440",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "annotation" : [ ]
                }
              },
              "include" : [ ],
              "codeFilter" : [ ],
              "dateFilter" : [ ],
              "otherFilter" : [ ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "443",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "446",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "CastIntervalAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "446",
            "s" : [ {
              "value" : [ "", "define ", "CastIntervalAsEncounter", ": " ]
            }, {
              "r" : "447",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "453",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "450",
                  "s" : [ {
                    "r" : "448",
                    "value" : [ "Interval[", "1", ", ", "5", "]" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "455",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "447",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "453",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "454",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Interval",
              "localId" : "450",
              "lowClosed" : true,
              "highClosed" : true,
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "IntervalTypeSpecifier",
                "localId" : "451",
                "annotation" : [ ],
                "pointType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "452",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "low" : {
                "type" : "Literal",
                "localId" : "448",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "high" : {
                "type" : "Literal",
                "localId" : "449",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "5",
                "annotation" : [ ]
              }
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "455",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "458",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "CastTupleAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "458",
            "s" : [ {
              "value" : [ "", "define ", "CastTupleAsEncounter", ": " ]
            }, {
              "r" : "459",
              "s" : [ {
                "value" : [ "cast " ]
              }, {
                "r" : "466",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "460",
                  "s" : [ {
                    "value" : [ "{" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "461",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "468",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "459",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : true,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "466",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "467",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Tuple",
              "localId" : "460",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "463",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "464",
                  "name" : "id",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "465",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "name" : "id",
                "value" : {
                  "type" : "Literal",
                  "localId" : "461",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "468",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "471",
        "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
        "name" : "CastNamedTupleAsEncounter",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "471",
            "s" : [ {
              "value" : [ "", "define ", "CastNamedTupleAsEncounter", ": " ]
            }, {
              "r" : "472",
              "s" : [ {
                "r" : "477",
                "s" : [ {
                  "value" : [ "Echo", "(" ]
                }, {
                  "r" : "473",
                  "s" : [ {
                    "value" : [ "Encounter", " {" ]
                  }, {
                    "s" : [ {
                      "value" : [ "id", ": " ]
                    }, {
                      "r" : "475",
                      "s" : [ {
                        "value" : [ "'1'" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ "}" ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "value" : [ " as " ]
              }, {
                "r" : "479",
                "s" : [ {
                  "value" : [ "Simple", ".", "Encounter" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "As",
          "localId" : "472",
          "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
          "strict" : false,
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "FunctionRef",
            "localId" : "477",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "478",
              "name" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Instance",
              "localId" : "473",
              "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
              "annotation" : [ ],
              "element" : [ {
                "name" : "id",
                "value" : {
                  "type" : "Literal",
                  "localId" : "475",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "1",
                  "annotation" : [ ]
                }
              } ]
            } ]
          },
          "asTypeSpecifier" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "479",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

