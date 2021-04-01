/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Count
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Count({1,2,3,4,5})
define has_null: Count({1,null,null,null,2})
define empty: Count({})
define is_null: Count(null as List<Integer>)
*/

module.exports['Count'] = {
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
            "localId" : "9",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Count",
               "source" : {
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
               }
            }
         }, {
            "localId" : "17",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{","1",",","null",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Count",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "11",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "13",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "20",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "18",
                        "value" : [ "Count","(","{}",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Count",
               "source" : {
                  "localId" : "18",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "26",
            "name" : "is_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","is_null",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "null"," as " ]
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
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Count",
               "source" : {
                  "localId" : "24",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "21",
                     "type" : "Null"
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
            }
         } ]
      }
   }
}

/* Sum
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Sum({1,2,3,4,5})
define has_null: Sum({1,null,null,null,2})
define not_null_q: Sum({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Sum({1 'ml',null,null,null,2 'ml'})
define unmatched_units_q: Min({1 'ml',2 'm',3 'ml',4 'ml',5 'ml',0 'ml'})
define empty: Sum(List<Integer>{})
define q_diff_units: Sum({1 'ml',0.002 'l',0.03 'dl',4 'ml',0.005 'l'})
define NumbersAndQuantities: Sum({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Sum({1 'mg/d', 0.002 '/d'})
*/

module.exports['Sum'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "68",
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
            "localId" : "9",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Sum",
               "source" : {
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
               }
            }
         }, {
            "localId" : "17",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{","1",",","null",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Sum",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "11",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "13",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Sum",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "26",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "27",
                           "value" : [ ",","null",",","null",",","null","," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Sum",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "26",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "27",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "29",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "30",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "42",
            "name" : "unmatched_units_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "","define ","unmatched_units_q",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "2 ","'m'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "41",
               "type" : "Min",
               "source" : {
                  "localId" : "40",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "35",
                     "value" : 2,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "36",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "37",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "38",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "39",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "46",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
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
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "45",
               "type" : "Sum",
               "source" : {
                  "localId" : "44",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "54",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "54",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "53",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "52",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "48",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "49",
                           "s" : [ {
                              "value" : [ "0.03 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "50",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "51",
                           "s" : [ {
                              "value" : [ "0.005 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "53",
               "type" : "Sum",
               "source" : {
                  "localId" : "52",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "47",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "48",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "49",
                     "value" : 0.03,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "50",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "51",
                     "value" : 0.005,
                     "unit" : "l",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "63",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "63",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "62",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "61",
                        "s" : [ {
                           "r" : "55",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "58",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "59",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "62",
               "type" : "Sum",
               "source" : {
                  "localId" : "61",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "55",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "56",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "57",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "58",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "59",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "60",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "68",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "68",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "67",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "66",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "65",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "67",
               "type" : "Sum",
               "source" : {
                  "localId" : "66",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "64",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "65",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Min
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Min({1,2,3,4,5,0})
define has_null: Min({1,null,-1,null,2})
define empty: Min(List<Integer>{})
define not_null_q: Min({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define has_null_q: Min({1 'ml',null,-1 'ml',null,2 'ml'})
define q_diff_units: Min({1 'ml',2 'dl',3 'l',4 'l',5 'l',0 'ml'})
define NumbersAndQuantities: Min({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IntegerMin: Min({ 2, 4, 8, 6 })
define DecimalMin: Min({ 5.0, 4.9, 5.1, -5.0 })
define DateMin: Min({ @2012-12-31, @2013-01-01, @2012-01-01 })
define DateTimeMin: Min({ DateTime(2012, 9, 9), DateTime(2012, 9, 5) })
define TimeMin: Min({ Time(12, 30, 4), Time(12, 30, 3), Time(12, 30, 5)})
define StringMin: Min({'def', 'abc', 'jkl', 'ghi'})
define MinIsNull: Min({ null as Quantity, null as Quantity, null as Quantity })
define MinIsAlsoNull: Min(null as List<Decimal>)
define IncompatibleUnitsNull: Min({1 'mg/d', 0.002 '/d'})
*/

module.exports['Min'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "136",
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
            "localId" : "10",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5",",","0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Min",
               "source" : {
                  "localId" : "8",
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
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "19",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "{","1",",","null","," ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "r" : "13",
                              "value" : [ "-","1" ]
                           } ]
                        }, {
                           "r" : "15",
                           "value" : [ ",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Min",
               "source" : {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "14",
                     "type" : "Negate",
                     "operand" : {
                        "localId" : "13",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "15",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "23",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Min",
               "source" : {
                  "localId" : "21",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "32",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "25",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "26",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "type" : "Min",
               "source" : {
                  "localId" : "30",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "24",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "25",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "26",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "27",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "28",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "29",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "41",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "34",
                           "value" : [ ",","null","," ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "35",
                              "s" : [ {
                                 "value" : [ "1 ","'ml'" ]
                              } ]
                           } ]
                        }, {
                           "r" : "37",
                           "value" : [ ",","null","," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "Min",
               "source" : {
                  "localId" : "39",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "33",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "34",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "36",
                     "type" : "Negate",
                     "operand" : {
                        "localId" : "35",
                        "value" : 1,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "37",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "38",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "50",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "50",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "49",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "48",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "43",
                           "s" : [ {
                              "value" : [ "2 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "value" : [ "3 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "45",
                           "s" : [ {
                              "value" : [ "4 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "5 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "49",
               "type" : "Min",
               "source" : {
                  "localId" : "48",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "43",
                     "value" : 2,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "44",
                     "value" : 3,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "45",
                     "value" : 4,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "46",
                     "value" : 5,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "47",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "59",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "59",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "58",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "57",
                        "s" : [ {
                           "r" : "51",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "52",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "53",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "55",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "58",
               "type" : "Min",
               "source" : {
                  "localId" : "57",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "51",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "52",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "53",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "54",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "55",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "56",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "66",
            "name" : "IntegerMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMin",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "64",
                        "s" : [ {
                           "r" : "60",
                           "value" : [ "{ ","2",", ","4",", ","8",", ","6"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "65",
               "type" : "Min",
               "source" : {
                  "localId" : "64",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "74",
            "name" : "DecimalMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "74",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMin",": " ]
                  }, {
                     "r" : "73",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "72",
                        "s" : [ {
                           "r" : "67",
                           "value" : [ "{ ","5.0",", ","4.9",", ","5.1",", " ]
                        }, {
                           "r" : "71",
                           "s" : [ {
                              "r" : "70",
                              "value" : [ "-","5.0" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "73",
               "type" : "Min",
               "source" : {
                  "localId" : "72",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.9",
                     "type" : "Literal"
                  }, {
                     "localId" : "69",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.1",
                     "type" : "Literal"
                  }, {
                     "localId" : "71",
                     "type" : "Negate",
                     "operand" : {
                        "localId" : "70",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "5.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "80",
            "name" : "DateMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "80",
                  "s" : [ {
                     "value" : [ "","define ","DateMin",": " ]
                  }, {
                     "r" : "79",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "78",
                        "s" : [ {
                           "r" : "75",
                           "value" : [ "{ ","@2012-12-31",", ","@2013-01-01",", ","@2012-01-01"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "79",
               "type" : "Min",
               "source" : {
                  "localId" : "78",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "75",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
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
                  }, {
                     "localId" : "76",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
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
                  }, {
                     "localId" : "77",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
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
                  } ]
               }
            }
         }, {
            "localId" : "91",
            "name" : "DateTimeMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "91",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeMin",": " ]
                  }, {
                     "r" : "90",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "84",
                           "s" : [ {
                              "r" : "81",
                              "value" : [ "DateTime","(","2012",", ","9",", ","9",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "88",
                           "s" : [ {
                              "r" : "85",
                              "value" : [ "DateTime","(","2012",", ","9",", ","5",")" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "90",
               "type" : "Min",
               "source" : {
                  "localId" : "89",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "84",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "81",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "82",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "88",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "85",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "86",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "87",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "106",
            "name" : "TimeMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "106",
                  "s" : [ {
                     "value" : [ "","define ","TimeMin",": " ]
                  }, {
                     "r" : "105",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "104",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "95",
                           "s" : [ {
                              "r" : "92",
                              "value" : [ "Time","(","12",", ","30",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "99",
                           "s" : [ {
                              "r" : "96",
                              "value" : [ "Time","(","12",", ","30",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "103",
                           "s" : [ {
                              "r" : "100",
                              "value" : [ "Time","(","12",", ","30",", ","5",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "105",
               "type" : "Min",
               "source" : {
                  "localId" : "104",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "95",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "92",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "93",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "94",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "99",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "96",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "97",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "98",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "103",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "100",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "101",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "102",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "113",
            "name" : "StringMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "113",
                  "s" : [ {
                     "value" : [ "","define ","StringMin",": " ]
                  }, {
                     "r" : "112",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "111",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "107",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "108",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "109",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "112",
               "type" : "Min",
               "source" : {
                  "localId" : "111",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "107",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  }, {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "125",
            "name" : "MinIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "125",
                  "s" : [ {
                     "value" : [ "","define ","MinIsNull",": " ]
                  }, {
                     "r" : "124",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "123",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "116",
                           "s" : [ {
                              "r" : "114",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "115",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "119",
                           "s" : [ {
                              "r" : "117",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "118",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "122",
                           "s" : [ {
                              "r" : "120",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "121",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "124",
               "type" : "Min",
               "source" : {
                  "localId" : "123",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "116",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "114",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "115",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "119",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "117",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "118",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "122",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "120",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "121",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "131",
            "name" : "MinIsAlsoNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "131",
                  "s" : [ {
                     "value" : [ "","define ","MinIsAlsoNull",": " ]
                  }, {
                     "r" : "130",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "129",
                        "s" : [ {
                           "r" : "126",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "128",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "127",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           }, {
                              "value" : [ ">" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "130",
               "type" : "Min",
               "source" : {
                  "localId" : "129",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "126",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "128",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "127",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "136",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "136",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "135",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "134",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "132",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "133",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "135",
               "type" : "Min",
               "source" : {
                  "localId" : "134",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "132",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "133",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Max
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Max({10,1,2,3,4,5})
define has_null: Max({1,null,null,2})
define not_null_q: Max({10 'ml',1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Max({1 'ml',null,null,2 'ml'})
define q_diff_units: Max({10 'ml',1 'ml',2 'ml',3 'ml',4 'ml',5 'l'})
define NumbersAndQuantities: Max({10 ,1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define IncompatibleUnitsNull: Max({1 'mg/d', 0.002 '/d'})

define empty: Max(List<Integer>{})

define IntegerMax: Max({ 2, 4, 8, 6 })
define DecimalMax: Max({ 5.0, 4.9, 5.1, -5.0 })
define DateMax: Max({ @2012-12-31, @2013-01-01, @2012-01-01 })
define DateTimeMax: Max({ DateTime(2012, 2, 3), DateTime(2012, 9, 5) })
define TimeMax: Max({ Time(12, 30, 1), Time(12, 30, 3), Time(12, 30, 2)})
define StringMax: Max({'def', 'abc', 'jkl', 'ghi'})
define MaxIsNull: Max({ null as Quantity, null as Quantity, null as Quantity })
define MaxIsAlsoNull: Max(null as List<Decimal>)
*/

module.exports['Max'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "132",
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
            "localId" : "10",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "8",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","10",",","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Max",
               "source" : {
                  "localId" : "8",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "17",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Max",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "13",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "26",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "10 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Max",
               "source" : {
                  "localId" : "24",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 10,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "23",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "28",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Max",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "27",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "29",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "30",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "42",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "10 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "5 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "41",
               "type" : "Max",
               "source" : {
                  "localId" : "40",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "value" : 10,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "35",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "36",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "37",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "38",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "39",
                     "value" : 5,
                     "unit" : "l",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "51",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "r" : "43",
                           "value" : [ "{","10"," ," ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "45",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "48",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "Max",
               "source" : {
                  "localId" : "49",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "43",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "44",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "45",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "46",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "47",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "48",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "56",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "56",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "55",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "54",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "52",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "53",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "55",
               "type" : "Max",
               "source" : {
                  "localId" : "54",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "52",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "53",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "60",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Max",
               "source" : {
                  "localId" : "58",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "67",
            "name" : "IntegerMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMax",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "65",
                        "s" : [ {
                           "r" : "61",
                           "value" : [ "{ ","2",", ","4",", ","8",", ","6"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "66",
               "type" : "Max",
               "source" : {
                  "localId" : "65",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "64",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "75",
            "name" : "DecimalMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "75",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMax",": " ]
                  }, {
                     "r" : "74",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "r" : "68",
                           "value" : [ "{ ","5.0",", ","4.9",", ","5.1",", " ]
                        }, {
                           "r" : "72",
                           "s" : [ {
                              "r" : "71",
                              "value" : [ "-","5.0" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "74",
               "type" : "Max",
               "source" : {
                  "localId" : "73",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "69",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.9",
                     "type" : "Literal"
                  }, {
                     "localId" : "70",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.1",
                     "type" : "Literal"
                  }, {
                     "localId" : "72",
                     "type" : "Negate",
                     "operand" : {
                        "localId" : "71",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "5.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "81",
            "name" : "DateMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "81",
                  "s" : [ {
                     "value" : [ "","define ","DateMax",": " ]
                  }, {
                     "r" : "80",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "79",
                        "s" : [ {
                           "r" : "76",
                           "value" : [ "{ ","@2012-12-31",", ","@2013-01-01",", ","@2012-01-01"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "80",
               "type" : "Max",
               "source" : {
                  "localId" : "79",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "76",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
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
                  }, {
                     "localId" : "77",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
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
                  }, {
                     "localId" : "78",
                     "type" : "Date",
                     "year" : {
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
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
                  } ]
               }
            }
         }, {
            "localId" : "92",
            "name" : "DateTimeMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "92",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeMax",": " ]
                  }, {
                     "r" : "91",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "90",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "85",
                           "s" : [ {
                              "r" : "82",
                              "value" : [ "DateTime","(","2012",", ","2",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "89",
                           "s" : [ {
                              "r" : "86",
                              "value" : [ "DateTime","(","2012",", ","9",", ","5",")" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "91",
               "type" : "Max",
               "source" : {
                  "localId" : "90",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "85",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "82",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "84",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "89",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "86",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "87",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "88",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "107",
            "name" : "TimeMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "107",
                  "s" : [ {
                     "value" : [ "","define ","TimeMax",": " ]
                  }, {
                     "r" : "106",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "105",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "96",
                           "s" : [ {
                              "r" : "93",
                              "value" : [ "Time","(","12",", ","30",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "r" : "97",
                              "value" : [ "Time","(","12",", ","30",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "104",
                           "s" : [ {
                              "r" : "101",
                              "value" : [ "Time","(","12",", ","30",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "106",
               "type" : "Max",
               "source" : {
                  "localId" : "105",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "96",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "93",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "94",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "95",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "100",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "97",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "98",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "99",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "104",
                     "type" : "Time",
                     "hour" : {
                        "localId" : "101",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "102",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "103",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "114",
            "name" : "StringMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "114",
                  "s" : [ {
                     "value" : [ "","define ","StringMax",": " ]
                  }, {
                     "r" : "113",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "112",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "108",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "109",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "111",
                           "s" : [ {
                              "value" : [ "'ghi'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "113",
               "type" : "Max",
               "source" : {
                  "localId" : "112",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  }, {
                     "localId" : "111",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "126",
            "name" : "MaxIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "126",
                  "s" : [ {
                     "value" : [ "","define ","MaxIsNull",": " ]
                  }, {
                     "r" : "125",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "124",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "117",
                           "s" : [ {
                              "r" : "115",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "116",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "120",
                           "s" : [ {
                              "r" : "118",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "119",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "123",
                           "s" : [ {
                              "r" : "121",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "122",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "125",
               "type" : "Max",
               "source" : {
                  "localId" : "124",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "117",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "115",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "116",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "120",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "118",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "119",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "123",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "121",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "122",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "132",
            "name" : "MaxIsAlsoNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "132",
                  "s" : [ {
                     "value" : [ "","define ","MaxIsAlsoNull",": " ]
                  }, {
                     "r" : "131",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "130",
                        "s" : [ {
                           "r" : "127",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "129",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "128",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           }, {
                              "value" : [ ">" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "131",
               "type" : "Max",
               "source" : {
                  "localId" : "130",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "127",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "129",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "128",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         } ]
      }
   }
}

/* Avg
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Avg({1,2,3,4,5})
define has_null: Avg({1,null,null,2})
define not_null_q: Avg({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define has_null_q: Avg({1 'ml',null,null,2 'ml'})
define empty: Avg(List<Integer>{})
define q_diff_units: Avg({1 'ml',0.002 'l',0.03 'dl',4 'ml',5 'ml'})
define NumbersAndQuantities: Avg({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Avg({1 'mg/d', 0.002 '/d'})
*/

module.exports['Avg'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "57",
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
            "localId" : "9",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Avg",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
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
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "16",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "Avg",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "14",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "10",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "operand" : {
                              "localId" : "11",
                              "type" : "Null"
                           }
                        }, {
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "operand" : {
                              "localId" : "12",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "13",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "24",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "17",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "Avg",
               "source" : {
                  "localId" : "22",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "17",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "18",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "31",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "25",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "26",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "Avg",
               "source" : {
                  "localId" : "29",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "25",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "26",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "27",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "28",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "35",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "35",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "34",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "34",
               "type" : "Avg",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "33",
                        "type" : "List"
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "43",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "0.03 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "Avg",
               "source" : {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "36",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "37",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "38",
                     "value" : 0.03,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "39",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "40",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "52",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "50",
                        "s" : [ {
                           "r" : "44",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "45",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "48",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "49",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "type" : "Avg",
               "source" : {
                  "localId" : "50",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "44",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "45",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "46",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "47",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "48",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "49",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "57",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "57",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "56",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "53",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "56",
               "type" : "Avg",
               "source" : {
                  "localId" : "55",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "53",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "54",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Median
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define odd: Median({5,1,2,3,4})
define even: Median({5,1,2,3,4,6})
define odd_q: Median({5 'ml',1 'ml',2 'ml',3 'ml',4 'ml'})
define even_q: Median({5 'ml',1 'ml',2 'ml',3 'ml',4 'ml',6 'ml'})
define q_diff_units: Median({5 'ml',0.001 'l',0.02 'dl',3 'ml',4 'ml',6 'ml'})
define NumbersAndQuantities: Median({5 ,1 ,2 ,3 ,4 'ml',6 'ml'})

define empty: Median(List<Integer>{})
define has_null: Median({1,null,null,2})
define dup_vals_even: Median({3,1,2,2,2,3,4,5})
define dup_vals_odd:  Median({3,1,2,2,2,3,4,5,6})
define has_null_q: Median({1 'ml',null,null,2 'ml'})
define dup_vals_even_q: Median({3 'ml',1 'ml',2 'ml',2 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define dup_vals_odd_q:  Median({3 'ml',1 'ml',2 'ml',2 'ml',2 'ml',3 'ml',4 'ml',5 'ml',6 'ml'})
define IncompatibleUnitsNull: Median({1 'mg/d', 0.002 '/d'})
*/

module.exports['Median'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "122",
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
            "localId" : "9",
            "name" : "odd",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","odd",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","5",",","1",",","2",",","3",",","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "7",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "2",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "3",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "4",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "5",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "6",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "18",
            "name" : "even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "18",
                  "s" : [ {
                     "value" : [ "","define ","even",": " ]
                  }, {
                     "r" : "17",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{","5",",","1",",","2",",","3",",","4",",","6","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "17",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "16",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "10",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "11",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "12",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "13",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "14",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "15",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "26",
            "name" : "odd_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","odd_q",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Median",
               "source" : {
                  "localId" : "24",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "19",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "23",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "35",
            "name" : "even_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "35",
                  "s" : [ {
                     "value" : [ "","define ","even_q",": " ]
                  }, {
                     "r" : "34",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "31",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "6 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "34",
               "type" : "Median",
               "source" : {
                  "localId" : "33",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "27",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "28",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "29",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "30",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "31",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "32",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "44",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "0.001 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "0.02 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "41",
                           "s" : [ {
                              "value" : [ "6 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "43",
               "type" : "Median",
               "source" : {
                  "localId" : "42",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "36",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "37",
                     "value" : 0.001,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "38",
                     "value" : 0.02,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "39",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "40",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "41",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "53",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "51",
                        "s" : [ {
                           "r" : "45",
                           "value" : [ "{","5"," ,","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "49",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "50",
                           "s" : [ {
                              "value" : [ "6 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "52",
               "type" : "Median",
               "source" : {
                  "localId" : "51",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "45",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "46",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "47",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "48",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "49",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "50",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "57",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "57",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "56",
                     "s" : [ {
                        "value" : [ "Median","(" ]
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
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "56",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "55",
                        "type" : "List"
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "64",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "r" : "58",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "62",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "58",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "operand" : {
                              "localId" : "59",
                              "type" : "Null"
                           }
                        }, {
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "operand" : {
                              "localId" : "60",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "61",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "75",
            "name" : "dup_vals_even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "75",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_even",": " ]
                  }, {
                     "r" : "74",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "73",
                        "s" : [ {
                           "r" : "65",
                           "value" : [ "{","3",",","1",",","2",",","2",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "74",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "73",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "67",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "68",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "69",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "70",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "71",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "87",
            "name" : "dup_vals_odd",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "87",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_odd",":  " ]
                  }, {
                     "r" : "86",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "85",
                        "s" : [ {
                           "r" : "76",
                           "value" : [ "{","3",",","1",",","2",",","2",",","2",",","3",",","4",",","5",",","6","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "86",
               "type" : "Median",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "85",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "76",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "77",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "79",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "80",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "81",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "83",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "84",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "94",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "94",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "93",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "92",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "88",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "89",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "91",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "93",
               "type" : "Median",
               "source" : {
                  "localId" : "92",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "88",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "89",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "operand" : {
                        "localId" : "90",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "91",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "105",
            "name" : "dup_vals_even_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "105",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_even_q",": " ]
                  }, {
                     "r" : "104",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "103",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "95",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "96",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "97",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "98",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "99",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "101",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "104",
               "type" : "Median",
               "source" : {
                  "localId" : "103",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "95",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "96",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "97",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "98",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "99",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "100",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "101",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "102",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "117",
            "name" : "dup_vals_odd_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "117",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_odd_q",":  " ]
                  }, {
                     "r" : "116",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "115",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "106",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "107",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "108",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "109",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "111",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "112",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "113",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "114",
                           "s" : [ {
                              "value" : [ "6 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "116",
               "type" : "Median",
               "source" : {
                  "localId" : "115",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "106",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "107",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "108",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "109",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "110",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "111",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "112",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "113",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "114",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "122",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "122",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "121",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "120",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "118",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "119",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "121",
               "type" : "Median",
               "source" : {
                  "localId" : "120",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "118",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "119",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Mode
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define not_null: Mode({1,2,2,2,3,4,5})
define has_null: Mode({1,null,null,2,2})
define empty: Mode({})

define bi_modal: Mode({1,2,2,2,3,3,3,4,5})
define NumbersAndQuantities: Mode({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Mode({1 'mg/d', 0.002 '/d'})
*/

module.exports['Mode'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "48",
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
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","2",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Mode",
               "source" : {
                  "localId" : "9",
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
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "19",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "12",
                           "value" : [ "{","1",",","null",",","null",",","2",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Mode",
               "source" : {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "13",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "14",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "22",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "22",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "21",
                     "s" : [ {
                        "r" : "20",
                        "value" : [ "Mode","(","{}",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "21",
               "type" : "Mode",
               "source" : {
                  "localId" : "20",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "34",
            "name" : "bi_modal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","bi_modal",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "r" : "23",
                           "value" : [ "{","1",",","2",",","2",",","2",",","3",",","3",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "Mode",
               "source" : {
                  "localId" : "32",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
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
               }
            }
         }, {
            "localId" : "43",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "r" : "35",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "38",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "Mode",
               "source" : {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "35",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "36",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "37",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "38",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "39",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "40",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "48",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "48",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "47",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "45",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "47",
               "type" : "Mode",
               "source" : {
                  "localId" : "46",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "44",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "45",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Variance
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define v: Variance({1,2,3,4,5})
define v_q: Variance({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: Variance({1.0 'ml',0.002 'l',0.003 'l',0.04 'dl',5.0 'ml'})
define NumbersAndQuantities: Variance({1.0 ,2.0 ,3.0 ,4.0 'ml',5.0 'ml'})
define IncompatibleUnitsNull: Variance({1 'mg/d', 0.002 '/d'})
*/

module.exports['Variance'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "38",
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
            "localId" : "9",
            "name" : "v",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","v",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Variance",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
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
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "17",
            "name" : "v_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","v_q",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Variance",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "11",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "12",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "13",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "14",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "0.003 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "0.04 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "5.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Variance",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 0.003,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 0.04,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1.0"," ,","2.0"," ,","3.0"," ," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "5.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Variance",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "28",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "3.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "29",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "30",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "38",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "37",
               "type" : "Variance",
               "source" : {
                  "localId" : "36",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "35",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* PopulationVariance
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define v: PopulationVariance({1.0,2.0,3.0,4.0,5.0})
define v_q: PopulationVariance({1.0 'ml',2.0 'ml',3.0 'ml',4.0 'ml',5.0 'ml'})
define q_diff_units: PopulationVariance({1.0 'ml',0.002 'l',0.003 'l',0.04 'dl',5.0 'ml'})
define NumbersAndQuantities: PopulationVariance({1.0 ,2.0 ,3.0 ,4.0 'ml',5.0 'ml'})
define IncompatibleUnitsNull: PopulationVariance({1 'mg/d', 0.002 '/d'})
*/

module.exports['PopulationVariance'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "38",
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
            "localId" : "9",
            "name" : "v",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","v",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1.0",",","2.0",",","3.0",",","4.0",",","5.0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "PopulationVariance",
               "source" : {
                  "localId" : "7",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "17",
            "name" : "v_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","v_q",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "2.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "3.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "5.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "PopulationVariance",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "11",
                     "value" : 2.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "12",
                     "value" : 3.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "13",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "14",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "0.003 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "0.04 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "5.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "PopulationVariance",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 0.003,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 0.04,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1.0"," ,","2.0"," ,","3.0"," ," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "5.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "PopulationVariance",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "28",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "3.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "29",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "30",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "38",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "37",
               "type" : "PopulationVariance",
               "source" : {
                  "localId" : "36",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "35",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* StdDev
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define std: StdDev({1,2,3,4,5})
define std_q: StdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: StdDev({1 'ml', 0.002 'l',3 'ml',4 'ml', 0.05 'dl'})
define sq_throw1: StdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'm'})
define NumbersAndQuantities: StdDev({1 ,2 ,3 ,4 'ml',5 })
define IncompatibleUnitsNull: StdDev({1 'mg/d', 0.002 '/d'})
*/

module.exports['StdDev'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "46",
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
            "localId" : "9",
            "name" : "std",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","std",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "StdDev",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
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
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "17",
            "name" : "std_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","std_q",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "StdDev",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "11",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "12",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "13",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "14",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "0.05 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "StdDev",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 0.05,
                     "unit" : "dl",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "sq_throw1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","sq_throw1",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "26",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "5 ","'m'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "StdDev",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "26",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "27",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "28",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "29",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "30",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "41",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "{","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "38",
                           "value" : [ ",","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "StdDev",
               "source" : {
                  "localId" : "39",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "34",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "35",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "36",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "37",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "38",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "46",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "43",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "45",
               "type" : "StdDev",
               "source" : {
                  "localId" : "44",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "43",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* PopulationStdDev
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define dev: PopulationStdDev({1,2,3,4,5})
define dev_q: PopulationStdDev({1 'ml',2 'ml',3 'ml',4 'ml',5 'ml'})
define q_diff_units: PopulationStdDev({1 'ml', 0.002 'l',3 'ml',4 'ml', 0.05 'dl'})
define NumbersAndQuantities: PopulationStdDev({1 ,2 ,3 ,4 'ml',5 })
define IncompatibleUnitsNull: PopulationStdDev({1 'mg/d', 0.002 '/d'})
*/

module.exports['PopulationStdDev'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "38",
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
            "localId" : "9",
            "name" : "dev",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","dev",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "PopulationStdDev",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
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
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "17",
            "name" : "dev_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","dev_q",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "14",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "PopulationStdDev",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "11",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "12",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "13",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "14",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "0.05 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "PopulationStdDev",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "19",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "20",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "21",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 0.05,
                     "unit" : "dl",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "30",
                           "value" : [ ",","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "PopulationStdDev",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "28",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "29",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "30",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "38",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "37",
               "type" : "PopulationStdDev",
               "source" : {
                  "localId" : "36",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "35",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* Product
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define decimal_product: Product({1.0, 2.0, 3.0, 4.0})
define integer_product: Product({5, 4, 5})
define zero_product: Product({0, 5, 10})
define quantity_product: Product({1.0 'g', 2.0 'g', 3.0 'g', 4.0 'g'})
define quantity_zero_product: Product({1.0 'g', 2.0 'g', 0 'g'})
define product_with_null: Product({5, 4, null})
define product_of_nulls: Product({null as Integer, null, null})
define product_null: Product(null as List<Decimal>)
define product_quantity_null: Product({null as Quantity, null as Quantity, null as Quantity})
define NumbersAndQuantities: Product({1 ,2 'ml',3 'ml',4 'ml',5 'ml',0 'ml'})
define IncompatibleUnitsNull: Product({1 'mg/d', 0.002 '/d'})
*/

module.exports['Product'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "79",
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
            "name" : "decimal_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","decimal_product",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1.0",", ","2.0",", ","3.0",", ","4.0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Product",
               "source" : {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "14",
            "name" : "integer_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","integer_product",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "{","5",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Product",
               "source" : {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "20",
            "name" : "zero_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","zero_product",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "r" : "15",
                           "value" : [ "{","0",", ","5",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Product",
               "source" : {
                  "localId" : "18",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "27",
            "name" : "quantity_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","quantity_product",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "1.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "2.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "3.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "4.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "Product",
               "source" : {
                  "localId" : "25",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "value" : 1.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "22",
                     "value" : 2.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "23",
                     "value" : 3.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "24",
                     "value" : 4.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "quantity_zero_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","quantity_zero_product",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "1.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "2.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "value" : [ "0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "Product",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "28",
                     "value" : 1.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "29",
                     "value" : 2.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "30",
                     "value" : 0,
                     "unit" : "g",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "39",
            "name" : "product_with_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","product_with_null",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "{","5",", ","4",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Product",
               "source" : {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "36",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "47",
            "name" : "product_of_nulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","product_of_nulls",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "r" : "40",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "41",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "r" : "43",
                           "value" : [ ", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "46",
               "type" : "Product",
               "source" : {
                  "localId" : "45",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "40",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "41",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "43",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "44",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "53",
            "name" : "product_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","product_null",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "51",
                        "s" : [ {
                           "r" : "48",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "50",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "49",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           }, {
                              "value" : [ ">" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "52",
               "type" : "Product",
               "source" : {
                  "localId" : "51",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "48",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "50",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "49",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "65",
            "name" : "product_quantity_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "65",
                  "s" : [ {
                     "value" : [ "","define ","product_quantity_null",": " ]
                  }, {
                     "r" : "64",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "63",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "r" : "54",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "55",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "59",
                           "s" : [ {
                              "r" : "57",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "58",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "62",
                           "s" : [ {
                              "r" : "60",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "61",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "64",
               "type" : "Product",
               "source" : {
                  "localId" : "63",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "56",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "54",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "55",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "59",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "57",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "58",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "62",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "60",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "61",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "74",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "74",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "73",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "72",
                        "s" : [ {
                           "r" : "66",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "68",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "69",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "70",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "71",
                           "s" : [ {
                              "value" : [ "0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "73",
               "type" : "Product",
               "source" : {
                  "localId" : "72",
                  "type" : "List",
                  "element" : [ {
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "66",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "67",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "68",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "69",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "70",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "71",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "79",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "79",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "78",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "75",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "0.002 ","'/d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "78",
               "type" : "Product",
               "source" : {
                  "localId" : "77",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "75",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "76",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         } ]
      }
   }
}

/* GeometricMean
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define decimal_geometric_mean: GeometricMean({2.0, 8.0, null})
define zero_geometric_mean: GeometricMean({2.0, 8.0, 0})
define null_geometric_mean: GeometricMean({1, 2, null})
define all_nulls: GeometricMean({null, null, null})
define also_null_geometric_mean: GeometricMean(null as List<Decimal>)
*/

module.exports['GeometricMean'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "31",
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
            "name" : "decimal_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","decimal_geometric_mean",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","2.0",", ","8.0",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "type" : "GeometricMean",
               "source" : {
                  "localId" : "5",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "8.0",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "As",
                     "operand" : {
                        "localId" : "4",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "13",
            "name" : "zero_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","zero_geometric_mean",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "{","2.0",", ","8.0",", ","0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "GeometricMean",
               "source" : {
                  "localId" : "11",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "8.0",
                     "type" : "Literal"
                  }, {
                     "type" : "ToDecimal",
                     "operand" : {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "19",
            "name" : "null_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","null_geometric_mean",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "r" : "14",
                           "value" : [ "{","1",", ","2",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "GeometricMean",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "17",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "14",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "15",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "operand" : {
                              "localId" : "16",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "type" : "ToDecimal",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "25",
            "name" : "all_nulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","all_nulls",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "20",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "GeometricMean",
               "source" : {
                  "type" : "Query",
                  "source" : [ {
                     "alias" : "X",
                     "expression" : {
                        "localId" : "23",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "20",
                           "type" : "Null"
                        }, {
                           "localId" : "21",
                           "type" : "Null"
                        }, {
                           "localId" : "22",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "return" : {
                     "distinct" : false,
                     "expression" : {
                        "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "As",
                        "operand" : {
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "31",
            "name" : "also_null_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","also_null_geometric_mean",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "28",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "27",
                              "s" : [ {
                                 "value" : [ "Decimal" ]
                              } ]
                           }, {
                              "value" : [ ">" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "GeometricMean",
               "source" : {
                  "localId" : "29",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "26",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "28",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "27",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         } ]
      }
   }
}

/* AllTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define at: AllTrue({true,true,true,true})
define atwn: AllTrue({true,true,null,null,true,true})

define atf: AllTrue({true,true,true,false})
define atfwn: AllTrue({true,true,null,null,true,false})
*/

module.exports['AllTrue'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "33",
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
            "name" : "at",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","at",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","true",",","true",",","true",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "AllTrue",
               "source" : {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "17",
            "name" : "atwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","atwn",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "{","true",",","true",",","null",",","null",",","true",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "AllTrue",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "11",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "24",
            "name" : "atf",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","atf",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{","true",",","true",",","true",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "AllTrue",
               "source" : {
                  "localId" : "22",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "atfwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","atfwn",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "25",
                           "value" : [ "{","true",",","true",",","null",",","null",",","true",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "AllTrue",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "27",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         } ]
      }
   }
}

/* AnyTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define at: AnyTrue({true,false,false,true})
define atwn: AnyTrue({true,false,null,null,false,true})

define atf: AnyTrue({false,false,false,false})
define atfwn: AnyTrue({false,false,null,null,false,false})
*/

module.exports['AnyTrue'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "33",
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
            "name" : "at",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","at",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","true",",","false",",","false",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "AnyTrue",
               "source" : {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "17",
            "name" : "atwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","atwn",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "15",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "{","true",",","false",",","null",",","null",",","false",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "AnyTrue",
               "source" : {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "11",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "12",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "24",
            "name" : "atf",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","atf",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{","false",",","false",",","false",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "AnyTrue",
               "source" : {
                  "localId" : "22",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "33",
            "name" : "atfwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "33",
                  "s" : [ {
                     "value" : [ "","define ","atfwn",": " ]
                  }, {
                     "r" : "32",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "31",
                        "s" : [ {
                           "r" : "25",
                           "value" : [ "{","false",",","false",",","null",",","null",",","false",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "32",
               "type" : "AnyTrue",
               "source" : {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "27",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         } ]
      }
   }
}

