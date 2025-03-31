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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "name" : "FiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","FiveIsInteger",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FiveIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","FiveIsString",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringFiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsInteger",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringFiveIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsString",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "name" : "ListOfIntegersIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ListOfIntegersIsListOfIntegers",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "223",
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
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "224",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "225",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "ListOfDecimalsIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","ListOfDecimalsIsListOfIntegers",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "{","1.5",", ","2.5",", ","3.5",", ","4.5",", ","5.5","}" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "238",
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
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "235",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "239",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "224",
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
            "name" : "IntervalOfIntegersIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfIntegersIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "Interval[","1",", ","5","]" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "220",
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
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "217",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "218",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "214",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "219",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "IntervalOfDecimalsIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDecimalsIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "Interval[","1.5",", ","5.5","]" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "232",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "229",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "231",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "233",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "234",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "233",
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
            "name" : "TupleOfIntegersIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfIntegersIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "215",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "216",
                              "value" : [ "b",": ","2" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "a"," " ]
                           }, {
                              "r" : "224",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "226",
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
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "217",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "218",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "219",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "220",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "221",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "215",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "216",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "227",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "228",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "229",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "230",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "231",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "223",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "224",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "225",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TupleOfDecimalsIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfDecimalsIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "236",
                              "value" : [ "a",": ","1.5" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "237",
                              "value" : [ "b",": ","2.5" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "a"," " ]
                           }, {
                              "r" : "245",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "247",
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
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "238",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "239",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "240",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "241",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "242",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "243",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "248",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "249",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "250",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "251",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "252",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "244",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "245",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "246",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "247",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "232",
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
            "name" : "IntegerIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "216",
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
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "217",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "218",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "219",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "220",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "215",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "DecimalIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","DecimalIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "5.5"," is " ]
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
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "227",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "228",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "229",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","StringIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "236",
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
               "localId" : "233",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "238",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "239",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "268",
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
            "name" : "EncounterIsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsEncounter",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "214",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "222",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "223",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "215",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "216",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "224",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EncounterIsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsRecord",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "236",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "228",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "229",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "230",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "238",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "240",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EncounterIsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsAny",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "250",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "251",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "242",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "243",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "244",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EncounterIsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsCondition",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "263",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "264",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "256",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "257",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "258",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "266",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "EncounterIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsString",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "277",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "270",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "271",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "272",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "280",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "325",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","FiveAsInteger",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "r" : "218",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","FiveAsString",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "StringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsInteger",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsString",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "239",
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
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "241",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "ListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","ListAsInteger",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "r" : "247",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "246",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "248",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "249",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "247",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "252",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsInteger",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "r" : "256",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "261",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "258",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "259",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "260",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "256",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "257",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsInteger",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "268",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "272",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "273",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "267",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "269",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "270",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "271",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "268",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "274",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "276",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsInteger",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "279",
                        "s" : [ {
                           "r" : "278",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "279",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "278",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "281",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "283",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CastFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "283",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsString",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "r" : "285",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "288",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastStringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsInteger",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "295",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "293",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "295",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CastStringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsString",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "299",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
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
               "localId" : "298",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "300",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsInteger",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "r" : "307",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "310",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "306",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "308",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "309",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "307",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "314",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastIntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsInteger",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "r" : "316",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "323",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "321",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "318",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "319",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "320",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "316",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "317",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastTupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsInteger",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "328",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "327",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "329",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "330",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "331",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "328",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "334",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "380",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "name" : "ListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","ListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "r" : "219",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "229",
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
               "localId" : "234",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "232",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "218",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "224",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "225",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "220",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "228",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "230",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "237",
            "name" : "ListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","ListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "240",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "241",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "242",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "243",
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
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "249",
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
               "localId" : "254",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "238",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "252",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "246",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "239",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "244",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "245",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "240",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "241",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "242",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "243",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "248",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "250",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "251",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "257",
            "name" : "IntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "r" : "259",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "263",
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
               "localId" : "268",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "269",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "258",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "266",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "264",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "263",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "271",
            "name" : "IntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "275",
                           "s" : [ {
                              "r" : "273",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "281",
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
               "localId" : "286",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "287",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "272",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "284",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "278",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "275",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "276",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "277",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "280",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "282",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "283",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "289",
            "name" : "TupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "291",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "292",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "299",
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
               "localId" : "304",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "305",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "290",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "302",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "296",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "291",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "293",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "294",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "295",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "292",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "298",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "300",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "307",
            "name" : "CastListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "307",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "r" : "310",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "320",
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
               "localId" : "325",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "326",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "308",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "323",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "324",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "317",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "318",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "309",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "315",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "316",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "310",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "311",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "312",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "313",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "314",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "319",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "321",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "322",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "328",
            "name" : "CastListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "328",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "330",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "331",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "332",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "333",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "334",
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
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "340",
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
               "localId" : "345",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "346",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "329",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "343",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "337",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "338",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "330",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "335",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "336",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "331",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "332",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "333",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "334",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "339",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "341",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "342",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "340",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "348",
            "name" : "CastIntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "348",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "349",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "351",
                        "s" : [ {
                           "r" : "350",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "354",
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
               "localId" : "359",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "360",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "349",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "357",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "358",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "351",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "352",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "353",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "355",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "356",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "362",
            "name" : "CastIntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "362",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "363",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "369",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "366",
                           "s" : [ {
                              "r" : "364",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "371",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "372",
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
               "localId" : "377",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "378",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "363",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "375",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "376",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "369",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "370",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "366",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "367",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "368",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "364",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "365",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "371",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "373",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "374",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "380",
            "name" : "CastTupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "380",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "381",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "387",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "382",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "383",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "390",
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
               "localId" : "395",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "396",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "381",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "393",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "387",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "382",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "384",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "385",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "386",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "383",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "389",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "391",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "392",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "390",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "392",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "name" : "IntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","IntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "220",
                           "s" : [ {
                              "r" : "218",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "226",
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
               "localId" : "231",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "229",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "220",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "221",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "222",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "219",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "227",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "228",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "234",
            "name" : "IntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "r" : "240",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "252",
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
               "localId" : "257",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "235",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "255",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "250",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "246",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "247",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "248",
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "240",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "237",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "238",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "239",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "245",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "242",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "243",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "244",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "251",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "253",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "254",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "260",
            "name" : "IntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "263",
                        "s" : [ {
                           "r" : "262",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "266",
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
               "localId" : "271",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "261",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "269",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "262",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "265",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "267",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "268",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "274",
            "name" : "ListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","ListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "r" : "277",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "287",
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
               "localId" : "292",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "293",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "275",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "290",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "284",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "276",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "282",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "283",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "277",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "278",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "279",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "280",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "281",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "286",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "288",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "289",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "295",
            "name" : "TupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "298",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "305",
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
               "localId" : "310",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "296",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "308",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "303",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "297",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "299",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "300",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "301",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "298",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "304",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "306",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "307",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "313",
            "name" : "CastIntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "r" : "315",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "322",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "323",
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
               "localId" : "328",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "329",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "314",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "326",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "317",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "318",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "319",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "315",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "316",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "322",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "324",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "325",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "323",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "331",
            "name" : "CastIntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "343",
                           "s" : [ {
                              "r" : "337",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "348",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "349",
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
               "localId" : "354",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "332",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "352",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "353",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "346",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "347",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "343",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "344",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "345",
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "337",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "334",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "335",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "336",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "342",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "339",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "340",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "341",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "348",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "350",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "351",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "357",
            "name" : "CastIntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "358",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "360",
                        "s" : [ {
                           "r" : "359",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "363",
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
               "localId" : "368",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "369",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "358",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "366",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "367",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "361",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "359",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "362",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "364",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "365",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "371",
            "name" : "CastListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "371",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "372",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "381",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "373",
                           "s" : [ {
                              "r" : "374",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "383",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "384",
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
               "localId" : "389",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "372",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "387",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "381",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "373",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "379",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "380",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "374",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "375",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "376",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "377",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "378",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "383",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "385",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "386",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "384",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "392",
            "name" : "CastTupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "392",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "393",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "395",
                                 "value" : [ "A",": ","5" ]
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
                        "r" : "401",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "402",
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
               "localId" : "407",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "408",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "393",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "405",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "406",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "399",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "400",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "394",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "396",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "397",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "398",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "395",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "401",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "403",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "404",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "402",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "448",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "name" : "TupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","TupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "219",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "220",
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
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "230",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "232",
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
               "localId" : "243",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "244",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "246",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "238",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "239",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "241",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "226",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "227",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "218",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "221",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "222",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "223",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "224",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "225",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "228",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "233",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "234",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "235",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "236",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "237",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "229",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "230",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "231",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "249",
            "name" : "TupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "252",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "B",": ","2" ]
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
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "263",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "265",
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
               "localId" : "276",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "277",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "279",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "280",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "250",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "271",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "272",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "273",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "274",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "259",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "260",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "251",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "254",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "255",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "256",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "257",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "258",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "252",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "261",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "266",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "267",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "268",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "269",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "270",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "262",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "263",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "264",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "265",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "282",
            "name" : "IntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "285",
                        "s" : [ {
                           "r" : "284",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "289",
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
               "localId" : "296",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "297",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "283",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "293",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "294",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "295",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "285",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "287",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "290",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "291",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "292",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "288",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "289",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "300",
            "name" : "ListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","ListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "301",
                     "s" : [ {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "r" : "303",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "310",
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
               "localId" : "317",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "318",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "301",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "314",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "315",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "306",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "307",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "302",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "304",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "305",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "303",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "308",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "311",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "312",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "313",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "309",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "310",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "321",
            "name" : "IntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "321",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "325",
                           "s" : [ {
                              "r" : "323",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "330",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "332",
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
               "localId" : "339",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "340",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "341",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "322",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "336",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "337",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "338",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "328",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "325",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "326",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "327",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "323",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "324",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "330",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "333",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "334",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "335",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "331",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "332",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "343",
            "name" : "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "343",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "345",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "346",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "347",
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
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "357",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "358",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "359",
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
               "localId" : "370",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "371",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "372",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "373",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "374",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "344",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "365",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "366",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "367",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "368",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "369",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "353",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "354",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "345",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "348",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "349",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "350",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "351",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "352",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "346",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "347",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "355",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "360",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "361",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "362",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "363",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "364",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "356",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "357",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "358",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "359",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "376",
            "name" : "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "376",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "377",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "386",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "378",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "379",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "380",
                                 "value" : [ "B",": ","2" ]
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
                        "r" : "388",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "389",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "390",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "391",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "392",
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
               "localId" : "403",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "404",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "405",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "406",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "407",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "377",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "398",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "399",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "400",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "401",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "402",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "386",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "378",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "381",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "382",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "383",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "384",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "385",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "379",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "380",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "388",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "393",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "394",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "395",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "396",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "397",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "389",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "390",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "391",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "392",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "409",
            "name" : "CastIntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "409",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "410",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "412",
                        "s" : [ {
                           "r" : "411",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "414",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "415",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "416",
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
               "localId" : "423",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "424",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "410",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "420",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "421",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "422",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "412",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "413",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "411",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "414",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "417",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "418",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "419",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "415",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "416",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "427",
            "name" : "CastListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "427",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "428",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "433",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "429",
                           "s" : [ {
                              "r" : "430",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "435",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "436",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "437",
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
               "localId" : "444",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "445",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "446",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "428",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "441",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "442",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "443",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "434",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "429",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "431",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "432",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "430",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "435",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "438",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "439",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "440",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "436",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "437",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "448",
            "name" : "CastIntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "448",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "449",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "455",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "452",
                           "s" : [ {
                              "r" : "450",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "457",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "458",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "459",
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
               "localId" : "466",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "467",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "468",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "449",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "463",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "464",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "465",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "455",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "452",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "453",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "454",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "450",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "451",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "457",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "460",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "461",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "462",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "458",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "459",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "437",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "name" : "IntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","IntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "219",
                        "s" : [ {
                           "r" : "218",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "222",
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
               "localId" : "230",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "227",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "223",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "224",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "225",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "226",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "234",
            "name" : "StringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","StringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "240",
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
               "localId" : "248",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "235",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "245",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "246",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "241",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "name" : "DecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "258",
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
               "localId" : "266",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "267",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "268",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "253",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "259",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "262",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "270",
            "name" : "ListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","ListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "r" : "273",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "274",
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
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "280",
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
               "localId" : "288",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "289",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "290",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "271",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "285",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "277",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "272",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "275",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "281",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "282",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "283",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "284",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "279",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "292",
            "name" : "IntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "293",
                     "s" : [ {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "r" : "294",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "302",
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
               "localId" : "310",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "311",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "312",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "293",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "307",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "299",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "296",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "297",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "298",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "294",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "295",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "303",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "304",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "305",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "306",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "314",
            "name" : "TupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "316",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "317",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "318",
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
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "327",
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
               "localId" : "335",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "336",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "337",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "315",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "332",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "334",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "324",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "325",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "316",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "319",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "320",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "321",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "322",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "323",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "317",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "318",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "328",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "329",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "330",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "331",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "326",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "327",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "339",
            "name" : "CastIntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "339",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "342",
                        "s" : [ {
                           "r" : "341",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "344",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "345",
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
               "localId" : "353",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "354",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "355",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "340",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "350",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "351",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "352",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "342",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "343",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "346",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "347",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "348",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "349",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "345",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "357",
            "name" : "CastStringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "357",
                  "s" : [ {
                     "value" : [ "","define ","CastStringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "358",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "360",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "359",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "364",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "362",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "363",
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
               "localId" : "371",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "372",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "373",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "358",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "368",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "369",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "370",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "360",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "361",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "359",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "364",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "365",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "366",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "367",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "375",
            "name" : "CastDecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "375",
                  "s" : [ {
                     "value" : [ "","define ","CastDecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "376",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "378",
                        "s" : [ {
                           "r" : "377",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "382",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "380",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "381",
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
               "localId" : "389",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "390",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "391",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "376",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "386",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "387",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "388",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "378",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "379",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "382",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "383",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "384",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "385",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "380",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "381",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "393",
            "name" : "CastListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "393",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "394",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "400",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "395",
                           "s" : [ {
                              "r" : "396",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "397",
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
                        "r" : "404",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "402",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "403",
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
               "localId" : "411",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "412",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "413",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "394",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "408",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "410",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "400",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "401",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "395",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "398",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "399",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "396",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "397",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "404",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "405",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "406",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "407",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "402",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "403",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "415",
            "name" : "CastIntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "415",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "416",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "422",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "419",
                           "s" : [ {
                              "r" : "417",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "426",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "424",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "425",
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
               "localId" : "433",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "434",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "435",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "416",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "430",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "431",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "432",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "422",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "423",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "419",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "420",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "421",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "417",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "418",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "426",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "427",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "428",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "429",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "424",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "425",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "437",
            "name" : "CastTupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "437",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "438",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "447",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "439",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "440",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "441",
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
                        "r" : "451",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "449",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "450",
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
               "localId" : "458",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "459",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "460",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "438",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "455",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "456",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "457",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "447",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "448",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "439",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "442",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "443",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "444",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "445",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "446",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "440",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "441",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "451",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "452",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "453",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "454",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "449",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "450",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "447",
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
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "EncounterAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","EncounterAsEncounter",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "218",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "225",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "226",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "227",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "218",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "219",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "220",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "230",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "name" : "EncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsRecord",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "245",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "241",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "242",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "243",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "234",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "235",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "236",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "246",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "EncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsAny",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "250",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "260",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "257",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "258",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "259",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "250",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "251",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "252",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "EncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsCondition",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "266",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "273",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "274",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "275",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "266",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "267",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "268",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "278",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "EncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsString",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "282",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "292",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "289",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "290",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "291",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "282",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "283",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "284",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "ListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","ListAsEncounter",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "r" : "301",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "301",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "302",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "298",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "299",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "300",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "303",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "305",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "IntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsEncounter",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "r" : "307",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "312",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "309",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "310",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "311",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "307",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "308",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "314",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "TupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsEncounter",": " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "319",
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
                        "r" : "325",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "317",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "324",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "318",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "320",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "321",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "322",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "319",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "325",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "327",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "NamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "327",
                  "s" : [ {
                     "value" : [ "","define ","NamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "331",
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
                        "r" : "334",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "332",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "333",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "329",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "331",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "334",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "336",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "CastEncounterAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsEncounter",": " ]
                  }, {
                     "r" : "337",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "348",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "345",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "338",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "350",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "337",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "348",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "349",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "345",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "346",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "347",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "338",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "339",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "340",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "350",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "352",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
            "name" : "CastEncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsRecord",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "364",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "361",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "354",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "366",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "353",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "364",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "365",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "361",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "362",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "363",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "354",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "355",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "356",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "366",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "368",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "CastEncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsAny",": " ]
                  }, {
                     "r" : "369",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "380",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "377",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "370",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "369",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "380",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "381",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "377",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "378",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "379",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "370",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "371",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "372",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "382",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "384",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "CastEncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "384",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsCondition",": " ]
                  }, {
                     "r" : "385",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "396",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "393",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "386",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "398",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "385",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "396",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "393",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "394",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "395",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "386",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "387",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "388",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "398",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "400",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "CastEncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "400",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsString",": " ]
                  }, {
                     "r" : "401",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "412",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "409",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "402",
                              "s" : [ {
                                 "value" : [ "[","Encounter","]" ]
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
                        "r" : "414",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "401",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "412",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "413",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "409",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "410",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "411",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "402",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "403",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "404",
                              "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                              "type" : "NamedTypeSpecifier"
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
                  "localId" : "414",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "416",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "CastListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "416",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsEncounter",": " ]
                  }, {
                     "r" : "417",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "421",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "418",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "423",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "417",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "421",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "422",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "418",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "419",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "420",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "423",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "425",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "CastIntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "425",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsEncounter",": " ]
                  }, {
                     "r" : "426",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "432",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "429",
                           "s" : [ {
                              "r" : "427",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "434",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "426",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "432",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "433",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "429",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "430",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "431",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "427",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "428",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "434",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "436",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "CastTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "436",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsEncounter",": " ]
                  }, {
                     "r" : "437",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "443",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "438",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "439",
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
                        "r" : "445",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "437",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "443",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "444",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "438",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "440",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "441",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "442",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "439",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "445",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "447",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "CastNamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "447",
                  "s" : [ {
                     "value" : [ "","define ","CastNamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "448",
                     "s" : [ {
                        "r" : "452",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "449",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "451",
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
                        "r" : "454",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "448",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "452",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "453",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "449",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "451",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "454",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

