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
define FiveIsDecimal: 5 is Decimal
define FivePointFiveIsInteger: 5.5 is Integer
define FivePointFiveIsDecimal: 5.5 is Decimal
*/

module.exports['IsSystemType'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "name" : "FiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "define ","FiveIsInteger",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Is",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "3",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "9",
            "name" : "FiveIsDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "define ","FiveIsDecimal",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Is",
               "operand" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "7",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "13",
            "name" : "FivePointFiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","FivePointFiveIsInteger",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "value" : [ "5.5"," is " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Is",
               "operand" : {
                  "localId" : "10",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "11",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "17",
            "name" : "FivePointFiveIsDecimal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "define ","FivePointFiveIsDecimal",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "value" : [ "5.5"," is " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "Decimal" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Is",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "15",
                  "name" : "{urn:hl7-org:elm-types:r1}Decimal",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "localId" : "11",
            "name" : "ListOfIntegersIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","ListOfIntegersIsListOfIntegers",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "8",
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
               "localId" : "10",
               "type" : "Is",
               "operand" : {
                  "localId" : "7",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "9",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "8",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "21",
            "name" : "ListOfDecimalsIsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","ListOfDecimalsIsListOfIntegers",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "r" : "12",
                           "value" : [ "{","1.5",", ","2.5",", ","3.5",", ","4.5",", ","5.5","}" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "18",
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
               "localId" : "20",
               "type" : "Is",
               "operand" : {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.5",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "19",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "18",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "localId" : "8",
            "name" : "IntervalOfIntegersIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "define ","IntervalOfIntegersIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "4",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "Interval[","1",", ","5","]" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "5",
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
               "localId" : "7",
               "type" : "Is",
               "operand" : {
                  "localId" : "4",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "6",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "5",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "15",
            "name" : "IntervalOfDecimalsIsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "define ","IntervalOfDecimalsIsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "11",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "Interval[","1.5",", ","5.5","]" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "12",
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
               "localId" : "14",
               "type" : "Is",
               "operand" : {
                  "localId" : "11",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.5",
                     "type" : "Literal"
                  },
                  "high" : {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "13",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "12",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "localId" : "11",
            "name" : "TupleOfIntegersIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","TupleOfIntegersIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "2",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "3",
                              "value" : [ "b",": ","2" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "6",
                           "s" : [ {
                              "value" : [ "a"," " ]
                           }, {
                              "r" : "5",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "8",
                           "s" : [ {
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "7",
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
               "localId" : "10",
               "type" : "Is",
               "operand" : {
                  "localId" : "4",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "2",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "3",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "9",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "6",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "5",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "8",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "7",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "21",
            "name" : "TupleOfDecimalsIsTupleOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","TupleOfDecimalsIsTupleOfIntegers",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Tuple{ " ]
                        }, {
                           "s" : [ {
                              "r" : "12",
                              "value" : [ "a",": ","1.5" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "r" : "13",
                              "value" : [ "b",": ","2.5" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "16",
                           "s" : [ {
                              "value" : [ "a"," " ]
                           }, {
                              "r" : "15",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "b"," " ]
                           }, {
                              "r" : "17",
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
               "localId" : "20",
               "type" : "Is",
               "operand" : {
                  "localId" : "14",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "12",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "13",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "isTypeSpecifier" : {
                  "localId" : "19",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "16",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "15",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "18",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "17",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "localId" : "7",
            "name" : "IntegerIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "define ","IntegerIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "4",
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
               "localId" : "6",
               "type" : "Is",
               "operand" : {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "5",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "3",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "4",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "13",
            "name" : "DecimalIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "define ","DecimalIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "8",
                        "value" : [ "5.5"," is " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "10",
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
               "localId" : "12",
               "type" : "Is",
               "operand" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                  "value" : "5.5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "11",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "10",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "19",
            "name" : "StringIsChoiceOfIntegersAndDecimals",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "define ","StringIsChoiceOfIntegersAndDecimals",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "16",
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
               "localId" : "18",
               "type" : "Is",
               "operand" : {
                  "localId" : "14",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "17",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "15",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "16",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
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
                     "value" : [ "using ","Simple"," version ","'1.0.0'" ]
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
            "name" : "EncounterIsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "6",
                  "s" : [ {
                     "value" : [ "define ","EncounterIsEncounter",": " ]
                  }, {
                     "r" : "5",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "5",
               "type" : "Is",
               "operand" : {
                  "localId" : "3",
                  "type" : "First",
                  "source" : {
                     "localId" : "2",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "4",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "11",
            "name" : "EncounterIsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "define ","EncounterIsRecord",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Is",
               "operand" : {
                  "localId" : "8",
                  "type" : "First",
                  "source" : {
                     "localId" : "7",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "9",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "16",
            "name" : "EncounterIsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "define ","EncounterIsAny",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "Is",
               "operand" : {
                  "localId" : "13",
                  "type" : "First",
                  "source" : {
                     "localId" : "12",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "14",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "21",
            "name" : "EncounterIsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "define ","EncounterIsCondition",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "17",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "20",
               "type" : "Is",
               "operand" : {
                  "localId" : "18",
                  "type" : "First",
                  "source" : {
                     "localId" : "17",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "19",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "26",
            "name" : "EncounterIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "define ","EncounterIsString",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "First","(" ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Is",
               "operand" : {
                  "localId" : "23",
                  "type" : "First",
                  "source" : {
                     "localId" : "22",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  }
               },
               "isTypeSpecifier" : {
                  "localId" : "24",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

