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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "217",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "222",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "227",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "230",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
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
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "221",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "220",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "223",
            "name" : "ListOfDecimalsIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","ListOfDecimalsIsListOfIntegers",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "{","1.5",", ","2.5",", ","3.5",", ","4.5",", ","5.5","}" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "List<" ]
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
               "localId" : "224",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "231",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "232",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "220",
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
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "218",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "217",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "220",
            "name" : "IntervalOfDecimalsIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDecimalsIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "224",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "Interval[","1.5",", ","5.5","]" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
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
            "expression" : {
               "localId" : "221",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "226",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "223",
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
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "a"," " ]
                           }, {
                              "r" : "219",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "220",
                           "s" : [ {
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "221",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "215",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
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
               }
            }
         }, {
            "localId" : "223",
            "name" : "TupleOfDecimalsIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfDecimalsIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "226",
                              "value" : [ "a",": ","1.5" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "227",
                              "value" : [ "b",": ","2.5" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "a"," " ]
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
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "232",
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
               "localId" : "224",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "228",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "229",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "231",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "232",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "226",
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
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "217",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "215",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "216",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "219",
            "name" : "DecimalIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","DecimalIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "5.5"," is " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "222",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "223",
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
               "localId" : "220",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "224",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "226",
            "name" : "StringIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","StringIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "230",
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
               "localId" : "227",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "231",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "244",
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
                        "r" : "217",
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
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "217",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "214",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "218",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "220",
            "name" : "EncounterIsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsRecord",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "225",
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
                        "value" : [ " is " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "222",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "226",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "228",
            "name" : "EncounterIsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsAny",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "233",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "230",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "236",
            "name" : "EncounterIsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsCondition",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "242",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "238",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "242",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "244",
            "name" : "EncounterIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","EncounterIsString",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "249",
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
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Is",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "type" : "First",
                  "signature" : [ ],
                  "source" : {
                     "localId" : "246",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "250",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "301",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
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
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "222",
            "name" : "FiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","FiveAsString",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "224",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "228",
            "name" : "StringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsInteger",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "234",
            "name" : "StringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsString",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "240",
            "name" : "ListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","ListAsInteger",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "r" : "243",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "244",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "242",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "243",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "247",
            "name" : "IntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsInteger",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "r" : "249",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "252",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "251",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "249",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "250",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "255",
            "name" : "TupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsInteger",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "258",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "256",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "259",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "257",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "258",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "260",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "262",
            "name" : "CastFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsInteger",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "265",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "266",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "268",
            "name" : "CastFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsString",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "271",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "274",
            "name" : "CastStringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsInteger",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "275",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "277",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "280",
            "name" : "CastStringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsString",": " ]
                  }, {
                     "r" : "281",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "281",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "283",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "284",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "286",
            "name" : "CastListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsInteger",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "r" : "289",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "287",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "290",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "288",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "289",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "291",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "293",
            "name" : "CastIntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsInteger",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "r" : "295",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "298",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "297",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "295",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "299",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "301",
            "name" : "CastTupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "301",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsInteger",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "305",
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
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "302",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "305",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "303",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "304",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "306",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "302",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
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
                        "r" : "224",
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
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "List<" ]
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
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "218",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "219",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "223",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "225",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "226",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "228",
            "name" : "ListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","ListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "231",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "232",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "234",
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
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "237",
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
               "localId" : "229",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "233",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "239",
            "name" : "IntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "242",
                        "s" : [ {
                           "r" : "241",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "244",
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
               "localId" : "240",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "242",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "243",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "246",
            "name" : "IntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "r" : "248",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "253",
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
               "localId" : "247",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "251",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "250",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "248",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "249",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "252",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "255",
            "name" : "TupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "258",
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
                        "r" : "260",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "261",
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
               "localId" : "256",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "259",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "257",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "258",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "260",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "263",
            "name" : "CastListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "r" : "266",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
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
            "expression" : {
               "localId" : "264",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "271",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "265",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "266",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "267",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "268",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "269",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "270",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "272",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "273",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "275",
            "name" : "CastListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "277",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "278",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "279",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "280",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "281",
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
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "284",
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
               "localId" : "276",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "282",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "277",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "278",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "279",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "280",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "281",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "283",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "284",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "286",
            "name" : "CastIntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "291",
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
               "localId" : "287",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "289",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "290",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "293",
            "name" : "CastIntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "293",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "r" : "295",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "300",
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
               "localId" : "294",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "298",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "297",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "295",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "299",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "302",
            "name" : "CastTupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "305",
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
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "308",
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
               "localId" : "303",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "306",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "304",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "305",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "307",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "308",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "314",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
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
                        "r" : "221",
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
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Interval<" ]
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
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "220",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "218",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "219",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "223",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "225",
            "name" : "IntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "r" : "231",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "240",
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
               "localId" : "226",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "237",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "231",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "228",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "229",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "230",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "236",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "233",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "234",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "235",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "239",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "242",
            "name" : "IntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "247",
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
               "localId" : "243",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "246",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "249",
            "name" : "ListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "249",
                  "s" : [ {
                     "value" : [ "","define ","ListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "r" : "252",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "259",
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
               "localId" : "250",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "257",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "251",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "252",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "254",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "255",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "256",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "258",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "259",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "261",
            "name" : "TupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "263",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "264",
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
                        "r" : "266",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "267",
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
               "localId" : "262",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "265",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "263",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "264",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "266",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "269",
            "name" : "CastIntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "274",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "r" : "271",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "276",
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
               "localId" : "270",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "274",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "273",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "271",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "272",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "275",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "278",
            "name" : "CastIntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "290",
                           "s" : [ {
                              "r" : "284",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "293",
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
               "localId" : "279",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "291",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "290",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "284",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "282",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "283",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "289",
                        "type" : "Date",
                        "signature" : [ ],
                        "year" : {
                           "localId" : "286",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "localId" : "287",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "localId" : "288",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "292",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "295",
            "name" : "CastIntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "296",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "r" : "297",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "300",
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
               "localId" : "296",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "298",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "297",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "299",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "302",
            "name" : "CastListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "303",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "r" : "305",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "312",
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
               "localId" : "303",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "310",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "304",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "307",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "308",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "309",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "311",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "312",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "314",
            "name" : "CastTupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsIntervalOfIntegers",": " ]
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
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "317",
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
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "Interval<" ]
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
            "expression" : {
               "localId" : "315",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "318",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "316",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "317",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "319",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "320",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "308",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
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
                        "r" : "221",
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
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "A"," " ]
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
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "226",
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
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "221",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "218",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "219",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "220",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "223",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "225",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "226",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "228",
            "name" : "TupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "231",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "232",
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
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "238",
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
            "expression" : {
               "localId" : "229",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "233",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "231",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "232",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "234",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "235",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "236",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "237",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "238",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "240",
            "name" : "IntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "246",
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
               "localId" : "241",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "244",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "245",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "248",
            "name" : "ListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","ListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "r" : "251",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "255",
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
               "localId" : "249",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "252",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "250",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "251",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "253",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "254",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "255",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "257",
            "name" : "IntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "r" : "259",
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
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "265",
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
               "localId" : "258",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "262",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "261",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "259",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "260",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "264",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "267",
            "name" : "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "270",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "271",
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
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "275",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "277",
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
            "expression" : {
               "localId" : "268",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "272",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "269",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "270",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "271",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
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
               }
            }
         }, {
            "localId" : "279",
            "name" : "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "282",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "283",
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
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "287",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "289",
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
            "expression" : {
               "localId" : "280",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "284",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "281",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "282",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "283",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "285",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "286",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "287",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "288",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "289",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "291",
            "name" : "CastIntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "294",
                        "s" : [ {
                           "r" : "293",
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
            "expression" : {
               "localId" : "292",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "294",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "293",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "295",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "296",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "297",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "299",
            "name" : "CastListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "303",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "r" : "302",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "306",
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
               "localId" : "300",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "303",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "301",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "302",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
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
               }
            }
         }, {
            "localId" : "308",
            "name" : "CastIntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "r" : "310",
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
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "316",
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
               "localId" : "309",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "313",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "312",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "310",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "311",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "314",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
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
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "220",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "221",
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
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "222",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "224",
            "name" : "StringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","StringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
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
                              "value" : [ "String" ]
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
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "230",
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
               }
            }
         }, {
            "localId" : "232",
            "name" : "DecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "237",
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
            "expression" : {
               "localId" : "233",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "235",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "238",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "240",
            "name" : "ListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","ListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "r" : "243",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "244",
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
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "247",
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
            "expression" : {
               "localId" : "241",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "245",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "242",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "243",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "244",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "248",
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
               }
            }
         }, {
            "localId" : "250",
            "name" : "IntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "251",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "r" : "252",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "257",
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
            "expression" : {
               "localId" : "251",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "254",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "252",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "258",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "257",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "260",
            "name" : "TupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "262",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "263",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "264",
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
                        "r" : "268",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "267",
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
            "expression" : {
               "localId" : "261",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "265",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "262",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "263",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "264",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "268",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "270",
            "name" : "CastIntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "r" : "272",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "276",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "275",
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
            "expression" : {
               "localId" : "271",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "273",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "276",
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
               }
            }
         }, {
            "localId" : "278",
            "name" : "CastStringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","CastStringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "284",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "283",
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
            "expression" : {
               "localId" : "279",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "281",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "280",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "284",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "282",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "283",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "286",
            "name" : "CastDecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","CastDecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "289",
                        "s" : [ {
                           "r" : "288",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "292",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "290",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "291",
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
            "expression" : {
               "localId" : "287",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "289",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "292",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "290",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "291",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "294",
            "name" : "CastListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "294",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "299",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "r" : "297",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "298",
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
                        "r" : "302",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "300",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "301",
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
            "expression" : {
               "localId" : "295",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "299",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "296",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "297",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "298",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "302",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "300",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "304",
            "name" : "CastIntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "r" : "306",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "310",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "311",
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
            "expression" : {
               "localId" : "305",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "309",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "308",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "307",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "312",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "311",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "314",
            "name" : "CastTupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "314",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "315",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "319",
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
                        "r" : "322",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "320",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "321",
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
            "expression" : {
               "localId" : "315",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "319",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "316",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "317",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "318",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "322",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "320",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "321",
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
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "356",
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
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "localId" : "213",
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "212",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "216",
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
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "221",
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
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "221",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "218",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "223",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "225",
            "name" : "EncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsRecord",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "227",
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
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "227",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "232",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "234",
            "name" : "EncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsAny",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "236",
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
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "240",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "239",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "236",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "241",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "243",
            "name" : "EncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsCondition",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "245",
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
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "244",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "249",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "248",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "245",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "250",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "252",
            "name" : "EncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsString",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "254",
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
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "258",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "257",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "254",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "259",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "261",
            "name" : "ListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","ListAsEncounter",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "263",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "264",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "263",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "265",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "267",
            "name" : "IntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsEncounter",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "271",
                           "s" : [ {
                              "r" : "269",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "273",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "272",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "271",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "269",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "270",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "273",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "275",
            "name" : "TupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "275",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsEncounter",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "r" : "279",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "277",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "278",
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
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "279",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "277",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "280",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "282",
            "name" : "NamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","NamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "286",
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
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "287",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "284",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "286",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "288",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "290",
            "name" : "CastEncounterAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsEncounter",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "292",
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
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "296",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "295",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "292",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "297",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "299",
            "name" : "CastEncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsRecord",": " ]
                  }, {
                     "r" : "300",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "301",
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
                        "r" : "306",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "300",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "305",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "304",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "301",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "306",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "308",
            "name" : "CastEncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsAny",": " ]
                  }, {
                     "r" : "309",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "313",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "310",
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
                        "r" : "315",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "309",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "314",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "313",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "310",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "315",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "317",
            "name" : "CastEncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "317",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsCondition",": " ]
                  }, {
                     "r" : "318",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "323",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "319",
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
                        "r" : "324",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "318",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "323",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "322",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "319",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "324",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "326",
            "name" : "CastEncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsString",": " ]
                  }, {
                     "r" : "327",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "328",
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
                        "r" : "333",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "327",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "332",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "331",
                     "type" : "First",
                     "signature" : [ ],
                     "source" : {
                        "localId" : "328",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve",
                        "include" : [ ],
                        "codeFilter" : [ ],
                        "dateFilter" : [ ],
                        "otherFilter" : [ ]
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "333",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "335",
            "name" : "CastListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "335",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsEncounter",": " ]
                  }, {
                     "r" : "336",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "338",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "337",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "339",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "336",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "338",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "337",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve",
                     "include" : [ ],
                     "codeFilter" : [ ],
                     "dateFilter" : [ ],
                     "otherFilter" : [ ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "339",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "341",
            "name" : "CastIntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "341",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsEncounter",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "345",
                           "s" : [ {
                              "r" : "343",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "347",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "346",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "345",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "343",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "344",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "347",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "349",
            "name" : "CastTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "349",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsEncounter",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "351",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "352",
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
                        "r" : "354",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "strict" : true,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "353",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "351",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "352",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "354",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "356",
            "name" : "CastNamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "356",
                  "s" : [ {
                     "value" : [ "","define ","CastNamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "357",
                     "s" : [ {
                        "r" : "361",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "358",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "360",
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
                        "r" : "362",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "357",
               "strict" : false,
               "type" : "As",
               "signature" : [ ],
               "operand" : {
                  "localId" : "361",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "358",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "360",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "362",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

