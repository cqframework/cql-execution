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
         "translatorVersion" : "3.27.0",
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
            "name" : "FiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","FiveIsInteger",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," is " ]
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
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","FiveIsString",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "222",
                        "value" : [ "5"," is " ]
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
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsInteger",": " ]
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
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsString",": " ]
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
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "237",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "230",
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
            "name" : "ListOfIntegersIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","ListOfIntegersIsListOfIntegers",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "r" : "217",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
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
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "222",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "223",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "224",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "226",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "227",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ListOfDecimalsIsListOfIntegers",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","1.5",", ","2.5",", ","3.5",", ","4.5",", ","5.5","}" ]
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
               "localId" : "231",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "238",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "239",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "240",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "241",
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
         "translatorVersion" : "3.27.0",
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
            "name" : "IntervalOfIntegersIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfIntegersIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "218",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "220",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "221",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "223",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDecimalsIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "Interval[","1.5",", ","5.5","]" ]
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
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "232",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "234",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "236",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "235",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "236",
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
            "name" : "TupleOfIntegersIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfIntegersIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "217",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "218",
                              "value" : [ "b",": ","2" ]
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
                              "value" : [ "a"," " ]
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
                              "value" : [ "b"," " ]
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
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "219",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "220",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "221",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "222",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "223",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "217",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "224",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "229",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "230",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "231",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "232",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "233",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "225",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "227",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "228",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfDecimalsIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "239",
                              "value" : [ "a",": ","1.5" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "240",
                              "value" : [ "b",": ","2.5" ]
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
                              "value" : [ "a"," " ]
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
                              "value" : [ "b"," " ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "type" : "Tuple",
                  "resultTypeSpecifier" : {
                     "localId" : "241",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "242",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "243",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "244",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "245",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "239",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "240",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "246",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "251",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "252",
                        "name" : "a",
                        "elementType" : {
                           "localId" : "253",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "254",
                        "name" : "b",
                        "elementType" : {
                           "localId" : "255",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "247",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "248",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "249",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "250",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "236",
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
            "name" : "IntegerIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "216",
                        "value" : [ "5"," is " ]
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
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "219",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","DecimalIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "227",
                        "value" : [ "5.5"," is " ]
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
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "230",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "231",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","StringIsChoiceOfIntegersAndDecimals",": " ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "242",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "243",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "245",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "241",
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
            "name" : "EncounterIsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsEncounter",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "224",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "225",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "216",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "217",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "218",
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
                  "localId" : "226",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsRecord",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "239",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "231",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "232",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "233",
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
                  "localId" : "241",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsAny",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "253",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "254",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "255",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "246",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
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
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsCondition",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "260",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "268",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "269",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "261",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "262",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "263",
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
                  "localId" : "271",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsString",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "283",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "First",
                  "signature" : [ {
                     "localId" : "284",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "285",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ],
                  "source" : {
                     "localId" : "276",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "277",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "278",
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
                  "localId" : "286",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "346",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","FiveAsInteger",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
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
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "225",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","FiveAsString",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "229",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsInteger",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsString",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "246",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
               "type" : "As",
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
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","ListAsInteger",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "r" : "257",
                              "value" : [ "{","5","}" ]
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
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
                     "localId" : "256",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "258",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "259",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "257",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsInteger",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "r" : "267",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
                     "localId" : "269",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "270",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "271",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "267",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "268",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
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
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "TupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsInteger",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "280",
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
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : false,
               "type" : "As",
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
                     "localId" : "279",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "281",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "282",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "283",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "280",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "286",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsInteger",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "r" : "291",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
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
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "294",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsString",": " ]
                  }, {
                     "r" : "298",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "r" : "299",
                           "value" : [ "Echo","(","5",")" ]
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
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "CastStringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsInteger",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "307",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "311",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsString",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "315",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "318",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "316",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "323",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsInteger",": " ]
                  }, {
                     "r" : "324",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "325",
                           "s" : [ {
                              "r" : "326",
                              "value" : [ "{","5","}" ]
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
               "localId" : "324",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "325",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "327",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "328",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "326",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "331",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsInteger",": " ]
                  }, {
                     "r" : "335",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "341",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "r" : "336",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "335",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "341",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "338",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "339",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "340",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "336",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "337",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "343",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsInteger",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "349",
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
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "347",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "strict" : true,
               "type" : "As",
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
                     "localId" : "348",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "350",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "351",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "352",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "349",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "355",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "401",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "name" : "ListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","ListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "222",
                           "s" : [ {
                              "r" : "223",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
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
               "localId" : "238",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "221",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "230",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "222",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "228",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "229",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "224",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "227",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "232",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "234",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "235",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","ListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "263",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "243",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "261",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
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
                     "localId" : "244",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "253",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "254",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "245",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "247",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "249",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "251",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "257",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "259",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "260",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "278",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "268",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "276",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "270",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "271",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "272",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "274",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "275",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "289",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "r" : "284",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "297",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "283",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "295",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "289",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "290",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "286",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "287",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "288",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "284",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "285",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "291",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "293",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "304",
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
               "localId" : "316",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "317",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "302",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "314",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "315",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "303",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "305",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "306",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "307",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "304",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "310",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "312",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "313",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "320",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "330",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "r" : "323",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
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
               "localId" : "338",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "339",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "321",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "336",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "330",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "331",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "322",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "328",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "329",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "323",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "324",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "325",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "326",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "327",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "332",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "334",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "335",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "343",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "363",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "364",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "343",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "361",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "362",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "344",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "353",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "354",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "345",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "349",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "351",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "357",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "359",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "360",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "358",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "367",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "370",
                        "s" : [ {
                           "r" : "369",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "378",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "379",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "368",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "376",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "377",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "370",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "371",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "369",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "372",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "374",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "375",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "382",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "383",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "386",
                           "s" : [ {
                              "r" : "384",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "397",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "398",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "383",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "395",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "389",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "390",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "386",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "387",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "388",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "384",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "385",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "391",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "393",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "394",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "392",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "401",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "402",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "408",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "403",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "404",
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
               "localId" : "416",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "417",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "402",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "414",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "408",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "409",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "403",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "405",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "406",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "407",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "404",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "410",
                  "type" : "ListTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "412",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "413",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "elementType" : {
                     "localId" : "411",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "405",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "name" : "IntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","IntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "r" : "222",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "235",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "221",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "224",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "225",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "226",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "229",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "231",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "r" : "245",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
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
               "localId" : "262",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "240",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "260",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "251",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "252",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "253",
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
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
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "244",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "250",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "247",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "256",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "258",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "r" : "268",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "277",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "267",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "275",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "269",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "271",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "273",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "274",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","ListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "r" : "284",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
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
               "localId" : "299",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "300",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "282",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "297",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "298",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "291",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "283",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "289",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "290",
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
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "286",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "287",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "288",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "293",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "295",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "296",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "306",
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
               "localId" : "318",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "319",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "304",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "316",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "317",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
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
                     "localId" : "305",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "307",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "308",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "309",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "306",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "312",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "314",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "315",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "322",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "323",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "r" : "324",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "337",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "338",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "323",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "335",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "329",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "326",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "327",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "328",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "324",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "325",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "331",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "333",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "334",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "332",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "356",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "353",
                           "s" : [ {
                              "r" : "347",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
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
               "localId" : "364",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "365",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "342",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "362",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "356",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "357",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "353",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "354",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "355",
                           "name" : "{urn:hl7-org:elm-types:r1}Date",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "347",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "344",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "345",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "346",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "352",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "349",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "350",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "351",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "358",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "360",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "361",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "359",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "369",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "371",
                        "s" : [ {
                           "r" : "370",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "379",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "380",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "369",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "377",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "378",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "371",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "372",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "373",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "375",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "376",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "374",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "383",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "384",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "393",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "385",
                           "s" : [ {
                              "r" : "386",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
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
               "localId" : "401",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "402",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "384",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "399",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "400",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "393",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "385",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "391",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "392",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "386",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "387",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "388",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "389",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "390",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "395",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "397",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "398",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "405",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "406",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "412",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "407",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "408",
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
               "localId" : "420",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "421",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "406",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "418",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "419",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
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
                     "localId" : "407",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "409",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "410",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "411",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "408",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "414",
                  "type" : "IntervalTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "416",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "417",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "pointType" : {
                     "localId" : "415",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "465",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "name" : "TupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","TupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "222",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "223",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
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
                              "value" : [ "A"," " ]
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
                              "value" : [ "B"," " ]
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
               "localId" : "248",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "249",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "250",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "251",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "221",
               "strict" : false,
               "type" : "As",
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
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "222",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "226",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "227",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "228",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "229",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "230",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "223",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "224",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "TupleTypeSpecifier",
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
                  "element" : [ {
                     "localId" : "234",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "236",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
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
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "A"," " ]
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
                              "value" : [ "B"," " ]
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
               "localId" : "283",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "284",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "286",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "256",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "278",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "279",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "281",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "282",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "257",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "261",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "262",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "263",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "264",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "265",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "258",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "260",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "268",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "273",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "274",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "275",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "276",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "277",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "269",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "271",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "272",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "293",
                        "s" : [ {
                           "r" : "292",
                           "value" : [ "Echo","(","5",")" ]
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
                              "value" : [ "A"," " ]
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
               "localId" : "304",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "305",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "291",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "301",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "302",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "303",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
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
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "295",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "298",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "299",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "300",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "296",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "297",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","ListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "r" : "312",
                              "value" : [ "{","5","}" ]
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
                              "value" : [ "A"," " ]
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
               "localId" : "326",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "327",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "310",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "323",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "324",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "325",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "315",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "316",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "311",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "313",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "314",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "312",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "317",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "320",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "321",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "322",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "318",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "319",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "332",
                     "s" : [ {
                        "r" : "338",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "335",
                           "s" : [ {
                              "r" : "333",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
                              "value" : [ "A"," " ]
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
               "localId" : "349",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "350",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "351",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "332",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "346",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "347",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "348",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "338",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "339",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "335",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "336",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "337",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "333",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "334",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "340",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "343",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "344",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "345",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "341",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "342",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "355",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "365",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "357",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
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
                              "value" : [ "A"," " ]
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
                              "value" : [ "B"," " ]
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
               "localId" : "382",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "383",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "384",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "385",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "386",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "355",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "377",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "378",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "379",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "380",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "381",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "365",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "366",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "356",
                     "type" : "Tuple",
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
                        "name" : "A",
                        "value" : {
                           "localId" : "357",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "358",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "367",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "372",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "373",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "374",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "375",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "376",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "368",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "369",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "370",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "371",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "389",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "400",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "391",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
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
                        "r" : "402",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "403",
                           "s" : [ {
                              "value" : [ "A"," " ]
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
                              "value" : [ "B"," " ]
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
               }, {
                  "localId" : "420",
                  "name" : "B",
                  "elementType" : {
                     "localId" : "421",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "390",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "412",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "413",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "414",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "415",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "416",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
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
                     "localId" : "391",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "395",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "396",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "397",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "398",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "399",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "392",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "394",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "402",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "407",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "408",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "409",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "410",
                        "name" : "B",
                        "elementType" : {
                           "localId" : "411",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "403",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "404",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "405",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "406",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "424",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "425",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "427",
                        "s" : [ {
                           "r" : "426",
                           "value" : [ "Echo","(","5",")" ]
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
                              "value" : [ "A"," " ]
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
            "expression" : {
               "localId" : "425",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "435",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "436",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "437",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "427",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "428",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "429",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "432",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "433",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "434",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "430",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "431",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "443",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "444",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "449",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "445",
                           "s" : [ {
                              "r" : "446",
                              "value" : [ "{","5","}" ]
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
                              "value" : [ "A"," " ]
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
            "expression" : {
               "localId" : "444",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "457",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "458",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "459",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "449",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "450",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "445",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "447",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "448",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "446",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "451",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "454",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "455",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "456",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "452",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "453",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "465",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "466",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "472",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "469",
                           "s" : [ {
                              "r" : "467",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
                              "value" : [ "A"," " ]
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
               "localId" : "483",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "484",
                  "name" : "A",
                  "elementType" : {
                     "localId" : "485",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "466",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "480",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "481",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "482",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "472",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "473",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "469",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "470",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "471",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "467",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "468",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "474",
                  "type" : "TupleTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "477",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "478",
                        "name" : "A",
                        "elementType" : {
                           "localId" : "479",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  },
                  "element" : [ {
                     "localId" : "475",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "476",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "457",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "220",
            "name" : "IntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","IntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "234",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "235",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "221",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "231",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "232",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
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
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
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
                        "name" : "{urn:hl7-org:elm-types:r1}String",
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
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","StringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
               "localId" : "254",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "240",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "251",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "247",
                  "type" : "ChoiceTypeSpecifier",
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
                  "choice" : [ {
                     "localId" : "245",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "246",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "260",
                     "s" : [ {
                        "r" : "262",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "Echo","(","5.5",")" ]
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
               "localId" : "273",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "274",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "275",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "260",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "270",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "271",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "272",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "261",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "266",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "267",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "268",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "269",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "264",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "r" : "286",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "r" : "281",
                              "value" : [ "{","5",", " ]
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
               "localId" : "297",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "298",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "279",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "294",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "295",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
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
                     "localId" : "280",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "284",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "285",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "281",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "282",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "290",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "291",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "292",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "293",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "r" : "304",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
               "localId" : "320",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "321",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "322",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "303",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "317",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "318",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "319",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "306",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "307",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "308",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "304",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "305",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "313",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "314",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "315",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "325",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "328",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
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
            "expression" : {
               "localId" : "326",
               "strict" : false,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "344",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "345",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "346",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "336",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "337",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "327",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "331",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "332",
                           "name" : "A",
                           "elementType" : {
                              "localId" : "333",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "334",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "335",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
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
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "329",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "340",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "341",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "342",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "343",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "338",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "339",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "353",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "355",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "Echo","(","5",")" ]
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
               "localId" : "366",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "367",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "368",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "353",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "363",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "364",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "365",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "355",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "356",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "359",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "360",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "361",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "362",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "357",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "358",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "371",
                  "s" : [ {
                     "value" : [ "","define ","CastStringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "372",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "375",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
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
            "expression" : {
               "localId" : "372",
               "strict" : true,
               "type" : "As",
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
               "signature" : [ ],
               "operand" : {
                  "localId" : "375",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "376",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "379",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "380",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "381",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "382",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "391",
                  "s" : [ {
                     "value" : [ "","define ","CastDecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "392",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "394",
                        "s" : [ {
                           "r" : "393",
                           "value" : [ "Echo","(","5.5",")" ]
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
            "expression" : {
               "localId" : "392",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "402",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "403",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "404",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "394",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "395",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "393",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "398",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "399",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "400",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "401",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "396",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "410",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "418",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "412",
                           "s" : [ {
                              "r" : "413",
                              "value" : [ "{","5",", " ]
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
               "localId" : "429",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "430",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "431",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "411",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "426",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "427",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "428",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "418",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "419",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "412",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "416",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "417",
                           "name" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "413",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "414",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "422",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "423",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "424",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "425",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "420",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "421",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "434",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "435",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "441",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "438",
                           "s" : [ {
                              "r" : "436",
                              "value" : [ "Interval[","1",", ","5","]" ]
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
            "expression" : {
               "localId" : "435",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "449",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "450",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "451",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "441",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "442",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "438",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "439",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "440",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "436",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "437",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "445",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "446",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "447",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "448",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "443",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "444",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "457",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "458",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "468",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "459",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "460",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
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
               "localId" : "479",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "480",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "481",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "458",
               "strict" : true,
               "type" : "As",
               "resultTypeSpecifier" : {
                  "localId" : "476",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "477",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ ],
               "operand" : {
                  "localId" : "468",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "469",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "459",
                     "type" : "Tuple",
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
                        }, {
                           "localId" : "466",
                           "name" : "B",
                           "elementType" : {
                              "localId" : "467",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "460",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "461",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "472",
                  "type" : "ChoiceTypeSpecifier",
                  "resultTypeSpecifier" : {
                     "localId" : "473",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "474",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "475",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  },
                  "choice" : [ {
                     "localId" : "470",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "471",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "471",
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
            "localId" : "212",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define function Echo(Val Any): " ]
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
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "214",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile\n","define ","EncounterAsEncounter",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "222",
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
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "233",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "229",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "230",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "231",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "222",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "223",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "224",
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
                  "localId" : "234",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsRecord",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "239",
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
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
               "strict" : false,
               "type" : "As",
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
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "247",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "248",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "239",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "240",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "241",
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
                  "localId" : "251",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsAny",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
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
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "266",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
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
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsCondition",": " ]
                  }, {
                     "r" : "272",
                     "s" : [ {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "273",
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
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "272",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "283",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "280",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "281",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "282",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "273",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "274",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "275",
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
                  "localId" : "285",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsString",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "290",
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
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : false,
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
                     "localId" : "297",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "298",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "299",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "290",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "291",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "292",
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
                  "localId" : "302",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "305",
                  "s" : [ {
                     "value" : [ "","define ","ListAsEncounter",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "312",
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
                     "localId" : "307",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "308",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "309",
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
                  "localId" : "312",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "315",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsEncounter",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "r" : "322",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "319",
                           "s" : [ {
                              "r" : "317",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "316",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "322",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "319",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "320",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "321",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "317",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "318",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "324",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "327",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsEncounter",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "r" : "335",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
                  "localId" : "335",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "336",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "329",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "332",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "333",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "334",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "330",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "337",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "340",
                  "s" : [ {
                     "value" : [ "","define ","NamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "342",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "341",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
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
                     "localId" : "342",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "344",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "348",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "351",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsEncounter",": " ]
                  }, {
                     "r" : "352",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "363",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "360",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "353",
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
                        "r" : "365",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "352",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "363",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "364",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "360",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "361",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "362",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "353",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "354",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "355",
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
                  "localId" : "365",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "368",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsRecord",": " ]
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
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "369",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
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
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "385",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsAny",": " ]
                  }, {
                     "r" : "386",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "397",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "387",
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
                        "r" : "399",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "386",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "397",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "398",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "394",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "395",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "396",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "387",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "388",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "389",
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
                  "localId" : "399",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "402",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsCondition",": " ]
                  }, {
                     "r" : "403",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "414",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "411",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "404",
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
                        "r" : "416",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "403",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "414",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "411",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "412",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "413",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "404",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "405",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "406",
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
                  "localId" : "416",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "419",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsString",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "431",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "428",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "421",
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
                        "r" : "433",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "431",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "432",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "428",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "First",
                     "signature" : [ {
                        "localId" : "429",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "430",
                           "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ],
                     "source" : {
                        "localId" : "421",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "resultTypeSpecifier" : {
                           "localId" : "422",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "423",
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
                  "localId" : "433",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "436",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsEncounter",": " ]
                  }, {
                     "r" : "437",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "441",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "438",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "443",
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
                  "localId" : "441",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "442",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "438",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "resultTypeSpecifier" : {
                        "localId" : "439",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "440",
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
                  "localId" : "443",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "446",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsEncounter",": " ]
                  }, {
                     "r" : "447",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "453",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "450",
                           "s" : [ {
                              "r" : "448",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "455",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "447",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "453",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "454",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "450",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "resultTypeSpecifier" : {
                        "localId" : "451",
                        "type" : "IntervalTypeSpecifier",
                        "pointType" : {
                           "localId" : "452",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "low" : {
                        "localId" : "448",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "449",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "455",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "458",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsEncounter",": " ]
                  }, {
                     "r" : "459",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "466",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "460",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "459",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "466",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "467",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "460",
                     "type" : "Tuple",
                     "resultTypeSpecifier" : {
                        "localId" : "463",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "464",
                           "name" : "id",
                           "elementType" : {
                              "localId" : "465",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "461",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "468",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
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
               "s" : {
                  "r" : "471",
                  "s" : [ {
                     "value" : [ "","define ","CastNamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "472",
                     "s" : [ {
                        "r" : "477",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "473",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
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
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "472",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "477",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ {
                     "localId" : "478",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  } ],
                  "operand" : [ {
                     "localId" : "473",
                     "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "475",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "479",
                  "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

