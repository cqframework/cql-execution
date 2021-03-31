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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "17",
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
                     "value" : [ "","define ","FiveIsInteger",": " ]
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
            "name" : "FiveIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","FiveIsString",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "5"," is " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "String" ]
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
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "13",
            "name" : "StringFiveIsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsInteger",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
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
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
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
            "name" : "StringFiveIsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveIsString",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "'5'" ]
                        } ]
                     }, {
                        "value" : [ " is " ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "String" ]
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
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "5",
                  "type" : "Literal"
               },
               "isTypeSpecifier" : {
                  "localId" : "15",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
                     "value" : [ "","define ","ListOfIntegersIsListOfIntegers",": " ]
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
                     "value" : [ "","define ","ListOfDecimalsIsListOfIntegers",": " ]
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
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "15",
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
                     "value" : [ "","define ","IntervalOfIntegersIsIntervalOfIntegers",": " ]
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
                     "value" : [ "","define ","IntervalOfDecimalsIsIntervalOfIntegers",": " ]
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
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "21",
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
                     "value" : [ "","define ","TupleOfIntegersIsTupleOfIntegers",": " ]
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
                     "value" : [ "","define ","TupleOfDecimalsIsTupleOfIntegers",": " ]
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
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "19",
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
                     "value" : [ "","define ","IntegerIsChoiceOfIntegersAndDecimals",": " ]
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
                     "value" : [ "","define ","DecimalIsChoiceOfIntegersAndDecimals",": " ]
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
                     "value" : [ "","define ","StringIsChoiceOfIntegersAndDecimals",": " ]
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
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "26",
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
                     "value" : [ "","define ","EncounterIsEncounter",": " ]
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
                     "value" : [ "","define ","EncounterIsRecord",": " ]
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
                     "value" : [ "","define ","EncounterIsAny",": " ]
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
                     "value" : [ "","define ","EncounterIsCondition",": " ]
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
                     "value" : [ "","define ","EncounterIsString",": " ]
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "82",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "9",
            "name" : "FiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","FiveAsInteger",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "5",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "6",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "7",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "14",
            "name" : "FiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","FiveAsString",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "11",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "11",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "12",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "19",
            "name" : "StringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsInteger",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "16",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "17",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "24",
            "name" : "StringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","StringFiveAsString",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "21",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "22",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "30",
            "name" : "ListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","ListAsInteger",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "27",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "26",
                           "s" : [ {
                              "r" : "25",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "29",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "27",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "26",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "25",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "28",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "37",
            "name" : "IntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsInteger",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "r" : "31",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "34",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "33",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "31",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "32",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "35",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "43",
            "name" : "TupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsInteger",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "38",
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
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "40",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "39",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "41",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "48",
            "name" : "CastFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "48",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsInteger",": " ]
                  }, {
                     "r" : "47",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "r" : "44",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "47",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "45",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "46",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "53",
            "name" : "CastFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","CastFiveAsString",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "50",
                        "s" : [ {
                           "r" : "49",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "51",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "52",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "50",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "49",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "51",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "58",
            "name" : "CastStringFiveAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "58",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsInteger",": " ]
                  }, {
                     "r" : "57",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "57",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "55",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "56",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "63",
            "name" : "CastStringFiveAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "63",
                  "s" : [ {
                     "value" : [ "","define ","CastStringFiveAsString",": " ]
                  }, {
                     "r" : "62",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "60",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "59",
                           "s" : [ {
                              "value" : [ "'5'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "62",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "60",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "59",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "61",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "69",
            "name" : "CastListAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "69",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsInteger",": " ]
                  }, {
                     "r" : "68",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "66",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "65",
                           "s" : [ {
                              "r" : "64",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "67",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "68",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "66",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "65",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "64",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "67",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "76",
            "name" : "CastIntervalAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsInteger",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "72",
                           "s" : [ {
                              "r" : "70",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "73",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "72",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "70",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "71",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "74",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "82",
            "name" : "CastTupleAsInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "82",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsInteger",": " ]
                  }, {
                     "r" : "81",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "78",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "77",
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
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "81",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "79",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "78",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "77",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "80",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "88",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "15",
            "name" : "ListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","ListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "r" : "5",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "List<" ]
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
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "11",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "10",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "5",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "7",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "8",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "9",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "13",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "12",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "25",
            "name" : "ListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","ListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "18",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "19",
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
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "22",
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
               "localId" : "24",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "21",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "20",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "18",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "19",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "23",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "22",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "31",
            "name" : "IntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "r" : "27",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "28",
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
               "localId" : "30",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "27",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "29",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "28",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "39",
            "name" : "IntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "r" : "32",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "36",
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
               "localId" : "38",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "35",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "34",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "32",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "33",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "37",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "36",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "46",
            "name" : "TupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "41",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "40",
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
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "43",
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
               "localId" : "45",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "42",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "41",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "40",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "44",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "43",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "57",
            "name" : "CastListOfIntegersAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "57",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfIntegersAsListOfIntegers",": " ]
                  }, {
                     "r" : "56",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "53",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "52",
                           "s" : [ {
                              "r" : "47",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "54",
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
               "localId" : "56",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "53",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "52",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "47",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "48",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "49",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "50",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "51",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "55",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "54",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "67",
            "name" : "CastListOfStringsAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "","define ","CastListOfStringsAsListOfIntegers",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "63",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "62",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "58",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "59",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "60",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "61",
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
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "64",
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
               "localId" : "66",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "63",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "62",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "58",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "59",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "60",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }, {
                        "localId" : "61",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "65",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "64",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "73",
            "name" : "CastIntegerAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "73",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsListOfIntegers",": " ]
                  }, {
                     "r" : "72",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "69",
                        "s" : [ {
                           "r" : "68",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "71",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "70",
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
               "localId" : "72",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "69",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "71",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "70",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "81",
            "name" : "CastIntervalAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "81",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsListOfIntegers",": " ]
                  }, {
                     "r" : "80",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "r" : "74",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "78",
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
               "localId" : "80",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "77",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "76",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "74",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "75",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "79",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "78",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "88",
            "name" : "CastTupleAsListOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "88",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsListOfIntegers",": " ]
                  }, {
                     "r" : "87",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "84",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "83",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "82",
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
                        "r" : "86",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "85",
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
               "localId" : "87",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "84",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "83",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "86",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "85",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "84",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "12",
            "name" : "IntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","IntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "r" : "5",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "9",
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
               "localId" : "11",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "8",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "7",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "5",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "10",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "20",
            "name" : "IntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","IntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "r" : "13",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "17",
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
               "localId" : "19",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "16",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "15",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "13",
                        "type" : "Date",
                        "year" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "14",
                        "type" : "Date",
                        "year" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "18",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "17",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "26",
            "name" : "IntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "23",
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
               "localId" : "25",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "22",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "24",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "23",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "37",
            "name" : "ListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "","define ","ListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "r" : "27",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "34",
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
               "localId" : "36",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "33",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "32",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "28",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "29",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "30",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "31",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "35",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "34",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "44",
            "name" : "TupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "38",
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
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "41",
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
               "localId" : "43",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "40",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "39",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "42",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "41",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "52",
            "name" : "CastIntervalOfIntegersAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfIntegersAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "r" : "45",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "50",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "49",
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
               "localId" : "51",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "48",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "47",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "45",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "46",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "50",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "49",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "60",
            "name" : "CastIntervalOfDatesAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalOfDatesAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "55",
                           "s" : [ {
                              "r" : "53",
                              "value" : [ "Interval[","@2000-01-01",", ","@2000-12-31","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "57",
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
               "localId" : "59",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "56",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "55",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "53",
                        "type" : "Date",
                        "year" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        },
                        "day" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     },
                     "high" : {
                        "localId" : "54",
                        "type" : "Date",
                        "year" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2000",
                           "type" : "Literal"
                        },
                        "month" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        },
                        "day" : {
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "31",
                           "type" : "Literal"
                        }
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "58",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "57",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "66",
            "name" : "CastIntegerAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "r" : "61",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "63",
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
               "localId" : "65",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "62",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "64",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "63",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "77",
            "name" : "CastListAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "77",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "76",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "72",
                           "s" : [ {
                              "r" : "67",
                              "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "75",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "74",
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
               "localId" : "76",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "73",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "72",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "67",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "68",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "69",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "70",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "71",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "75",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "74",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "84",
            "name" : "CastTupleAsIntervalOfIntegers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "84",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsIntervalOfIntegers",": " ]
                  }, {
                     "r" : "83",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "79",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "78",
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
                        "r" : "82",
                        "s" : [ {
                           "value" : [ "Interval<" ]
                        }, {
                           "r" : "81",
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
               "localId" : "83",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "80",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "79",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "82",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "81",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "96",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "15",
            "name" : "TupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","TupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "5",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "6",
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
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "9",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "11",
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
               "localId" : "14",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "8",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "7",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "5",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "6",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "13",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "10",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "9",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "12",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "11",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "26",
            "name" : "TupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","TupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "16",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "17",
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
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "20",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "22",
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
               "localId" : "25",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "19",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "18",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "16",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "17",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "24",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "21",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "20",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "23",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "22",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "IntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","IntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "r" : "28",
                        "s" : [ {
                           "r" : "27",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "29",
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
               "localId" : "32",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "28",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "31",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "30",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "29",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "41",
            "name" : "ListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","ListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "r" : "34",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "37",
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
               "localId" : "40",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "36",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "35",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "34",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "39",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "38",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "37",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "50",
            "name" : "IntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "50",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "49",
                     "s" : [ {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "r" : "42",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "46",
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
               "localId" : "49",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "45",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "44",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "42",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "43",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "48",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "47",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "46",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "61",
            "name" : "CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "61",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAIntegerBStringAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "60",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "53",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "r" : "51",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "52",
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
                        "r" : "59",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "55",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "58",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "57",
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
               "localId" : "60",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "54",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "53",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "51",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "59",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "56",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "55",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "58",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "57",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "72",
            "name" : "CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleOfAStringBIntegerAsTupleOfAIntegerBString",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "A",": " ]
                              }, {
                                 "r" : "62",
                                 "s" : [ {
                                    "value" : [ "'1'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "63",
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
                        "r" : "70",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "66",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "69",
                           "s" : [ {
                              "value" : [ "B"," " ]
                           }, {
                              "r" : "68",
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
               "localId" : "71",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "65",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "64",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "70",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "67",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "66",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "69",
                     "name" : "B",
                     "elementType" : {
                        "localId" : "68",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "79",
            "name" : "CastIntegerAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "79",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsTupleOfInteger",": " ]
                  }, {
                     "r" : "78",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "r" : "73",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "75",
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
               "localId" : "78",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "74",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "73",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "77",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "76",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "75",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "87",
            "name" : "CastListAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "87",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsTupleOfInteger",": " ]
                  }, {
                     "r" : "86",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "82",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "81",
                           "s" : [ {
                              "r" : "80",
                              "value" : [ "{","5","}" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "84",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "83",
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
               "localId" : "86",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "82",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "81",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "80",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "85",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "84",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "83",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "96",
            "name" : "CastIntervalAsTupleOfInteger",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "96",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsTupleOfInteger",": " ]
                  }, {
                     "r" : "95",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "91",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "90",
                           "s" : [ {
                              "r" : "88",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "94",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "r" : "93",
                           "s" : [ {
                              "value" : [ "A"," " ]
                           }, {
                              "r" : "92",
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
               "localId" : "95",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "91",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "90",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "88",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "89",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "94",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "93",
                     "name" : "A",
                     "elementType" : {
                        "localId" : "92",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "100",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "11",
            "name" : "IntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","IntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "5",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "7",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "8",
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
               "localId" : "10",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "6",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "9",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "7",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "8",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "18",
            "name" : "StringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","StringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "15",
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
               "localId" : "17",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "13",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "16",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "14",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "15",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "DecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","DecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "r" : "19",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
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
               "localId" : "24",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "20",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "23",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "21",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "22",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "34",
            "name" : "ListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","ListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "r" : "26",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "27",
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
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "31",
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
               "localId" : "33",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "29",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "28",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "32",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "30",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "31",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "43",
            "name" : "IntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "r" : "38",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "r" : "35",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "40",
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
               "localId" : "42",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "38",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "37",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "35",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "36",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "41",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "39",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "40",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "52",
            "name" : "TupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "44",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "45",
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
                        "r" : "50",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "48",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "49",
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
               "localId" : "51",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "47",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "46",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "44",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "45",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "50",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "48",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "49",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "59",
            "name" : "CastIntegerAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "59",
                  "s" : [ {
                     "value" : [ "","define ","CastIntegerAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "58",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "r" : "53",
                           "value" : [ "Echo","(","5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "55",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "56",
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
               "localId" : "58",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "54",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "57",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "55",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "56",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "66",
            "name" : "CastStringAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "","define ","CastStringAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "'Foo'" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "62",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "63",
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
               "localId" : "65",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "61",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Foo",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "64",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "62",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "63",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "73",
            "name" : "CastDecimalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "73",
                  "s" : [ {
                     "value" : [ "","define ","CastDecimalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "72",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "r" : "67",
                           "value" : [ "Echo","(","5.5",")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "71",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "69",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "70",
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
               "localId" : "72",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "68",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.5",
                     "type" : "Literal"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "71",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "69",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "70",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "82",
            "name" : "CastListAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "82",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "81",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "r" : "74",
                              "value" : [ "{","5",", " ]
                           }, {
                              "r" : "75",
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
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "78",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "79",
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
               "localId" : "81",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "77",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "76",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "74",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "75",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "80",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "78",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "79",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "91",
            "name" : "CastIntervalAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "91",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "90",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "86",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "85",
                           "s" : [ {
                              "r" : "83",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "87",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "88",
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
               "localId" : "90",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "86",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "85",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "84",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "89",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "87",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "88",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               }
            }
         }, {
            "localId" : "100",
            "name" : "CastTupleAsChoiceOfIntegersAndStrings",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "100",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsChoiceOfIntegersAndStrings",": " ]
                  }, {
                     "r" : "99",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "95",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "94",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "92",
                                 "value" : [ "A",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "B",": " ]
                              }, {
                                 "r" : "93",
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
                        "r" : "98",
                        "s" : [ {
                           "value" : [ "Choice<" ]
                        }, {
                           "r" : "96",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "97",
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
               "localId" : "99",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "95",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "94",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "A",
                        "value" : {
                           "localId" : "92",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "B",
                        "value" : {
                           "localId" : "93",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "98",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "96",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "97",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "112",
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
            "localId" : "4",
            "name" : "Echo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "type" : "FunctionDef",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","define function ","Echo","(","Val"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Any" ]
                     } ]
                  }, {
                     "value" : [ "): " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Val" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "3",
               "name" : "Val",
               "type" : "OperandRef"
            },
            "operand" : [ {
               "name" : "Val",
               "operandTypeSpecifier" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            } ]
         }, {
            "localId" : "10",
            "name" : "EncounterAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "// fool CQL-to-ELM into letting the casts compile","define ","EncounterAsEncounter",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "6",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "5",
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
                        "r" : "8",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "7",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "6",
                     "type" : "First",
                     "source" : {
                        "localId" : "5",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "8",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "16",
            "name" : "EncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsRecord",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "11",
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
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "13",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "12",
                     "type" : "First",
                     "source" : {
                        "localId" : "11",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "14",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "22",
            "name" : "EncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsAny",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
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
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "20",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "19",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "18",
                     "type" : "First",
                     "source" : {
                        "localId" : "17",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "20",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "28",
            "name" : "EncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsCondition",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "23",
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
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "27",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "25",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "24",
                     "type" : "First",
                     "source" : {
                        "localId" : "23",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "26",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "34",
            "name" : "EncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","EncounterAsString",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "29",
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
                        "r" : "32",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "31",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "30",
                     "type" : "First",
                     "source" : {
                        "localId" : "29",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "32",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "39",
            "name" : "ListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","ListAsEncounter",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "36",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "35",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "37",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "46",
            "name" : "IntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","IntervalAsEncounter",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "r" : "40",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "45",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "43",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "42",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "40",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "41",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "44",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "52",
            "name" : "TupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","TupleAsEncounter",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "48",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "47",
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
                        "r" : "50",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "49",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "48",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "47",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "50",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "58",
            "name" : "NamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "58",
                  "s" : [ {
                     "value" : [ "","define ","NamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "57",
                     "s" : [ {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "53",
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
                        "r" : "56",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "57",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "55",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "54",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "56",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "64",
            "name" : "CastEncounterAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsEncounter",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "59",
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
                        "r" : "62",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "61",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "60",
                     "type" : "First",
                     "source" : {
                        "localId" : "59",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "62",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "70",
            "name" : "CastEncounterAsRecord",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsRecord",": " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "67",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "66",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "65",
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
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "Simple",".","Record" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "69",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "67",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "66",
                     "type" : "First",
                     "source" : {
                        "localId" : "65",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "68",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Record",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "76",
            "name" : "CastEncounterAsAny",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsAny",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "72",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "71",
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
                        "r" : "74",
                        "s" : [ {
                           "value" : [ "System",".","Any" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "73",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "72",
                     "type" : "First",
                     "source" : {
                        "localId" : "71",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "74",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "82",
            "name" : "CastEncounterAsCondition",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "82",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsCondition",": " ]
                  }, {
                     "r" : "81",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "79",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "78",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "77",
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
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "Simple",".","Condition" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "81",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "79",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "78",
                     "type" : "First",
                     "source" : {
                        "localId" : "77",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "80",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Condition",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "88",
            "name" : "CastEncounterAsString",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "88",
                  "s" : [ {
                     "value" : [ "","define ","CastEncounterAsString",": " ]
                  }, {
                     "r" : "87",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "84",
                           "s" : [ {
                              "value" : [ "First","(" ]
                           }, {
                              "r" : "83",
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
                        "r" : "86",
                        "s" : [ {
                           "value" : [ "System",".","String" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "87",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "85",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "84",
                     "type" : "First",
                     "source" : {
                        "localId" : "83",
                        "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "Retrieve"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "86",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "93",
            "name" : "CastListAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "93",
                  "s" : [ {
                     "value" : [ "","define ","CastListAsEncounter",": " ]
                  }, {
                     "r" : "92",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "90",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "89",
                           "s" : [ {
                              "value" : [ "[","Encounter","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "91",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "92",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "90",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "89",
                     "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Retrieve"
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "91",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "100",
            "name" : "CastIntervalAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "100",
                  "s" : [ {
                     "value" : [ "","define ","CastIntervalAsEncounter",": " ]
                  }, {
                     "r" : "99",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "97",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "96",
                           "s" : [ {
                              "r" : "94",
                              "value" : [ "Interval[","1",", ","5","]" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " as " ]
                     }, {
                        "r" : "98",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "99",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "97",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "96",
                     "lowClosed" : true,
                     "highClosed" : true,
                     "type" : "Interval",
                     "low" : {
                        "localId" : "94",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "high" : {
                        "localId" : "95",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "98",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "106",
            "name" : "CastTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "106",
                  "s" : [ {
                     "value" : [ "","define ","CastTupleAsEncounter",": " ]
                  }, {
                     "r" : "105",
                     "s" : [ {
                        "value" : [ "cast " ]
                     }, {
                        "r" : "103",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "101",
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
                        "r" : "104",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "105",
               "strict" : true,
               "type" : "As",
               "operand" : {
                  "localId" : "103",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "102",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "101",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "104",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "112",
            "name" : "CastNamedTupleAsEncounter",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "112",
                  "s" : [ {
                     "value" : [ "","define ","CastNamedTupleAsEncounter",": " ]
                  }, {
                     "r" : "111",
                     "s" : [ {
                        "r" : "109",
                        "s" : [ {
                           "value" : [ "Echo","(" ]
                        }, {
                           "r" : "108",
                           "s" : [ {
                              "value" : [ "Encounter"," {" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "id",": " ]
                              }, {
                                 "r" : "107",
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
                        "r" : "110",
                        "s" : [ {
                           "value" : [ "Simple",".","Encounter" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "111",
               "strict" : false,
               "type" : "As",
               "operand" : {
                  "localId" : "109",
                  "name" : "Echo",
                  "type" : "FunctionRef",
                  "operand" : [ {
                     "localId" : "108",
                     "classType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "id",
                        "value" : {
                           "localId" : "107",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "asTypeSpecifier" : {
                  "localId" : "110",
                  "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      }
   }
}

