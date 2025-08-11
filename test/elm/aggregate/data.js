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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "266",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "228",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "{","1",",","null",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "249",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "250",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "233",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "241",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "261",
                     "s" : [ {
                        "r" : "254",
                        "value" : [ "Count","(","{}",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "261",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "262",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "263",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "254",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "255",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "256",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "266",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "is_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "266",
                  "s" : [ {
                     "value" : [ "","define ","is_null",": " ]
                  }, {
                     "r" : "279",
                     "s" : [ {
                        "value" : [ "Count","(" ]
                     }, {
                        "r" : "267",
                        "s" : [ {
                           "r" : "268",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "270",
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
               "localId" : "279",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Count",
               "signature" : [ {
                  "localId" : "280",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "281",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "267",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "273",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "274",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "269",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "271",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "272",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "366",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "228",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "{","1",",","null",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "249",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "250",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "233",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "242",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "241",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "259",
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
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "267",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "254",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "287",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "274",
                           "value" : [ ",","null",",","null",",","null","," ]
                        }, {
                           "r" : "277",
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
               "localId" : "287",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "288",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "289",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "272",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "281",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "282",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "278",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "279",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "275",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "280",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "276",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "292",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "unmatched_units_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "292",
                  "s" : [ {
                     "value" : [ "","define ","unmatched_units_q",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "2 ","'m'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "299",
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
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "307",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "293",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "300",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "m",
                     "type" : "Quantity"
                  }, {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "312",
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
               "localId" : "321",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "322",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "313",
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
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "326",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "326",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "339",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "328",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "330",
                           "s" : [ {
                              "value" : [ "0.03 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "331",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "332",
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
               "localId" : "339",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "340",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "341",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "327",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "333",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "334",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "328",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "329",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "330",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.03,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "331",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "332",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.005,
                     "unit" : "l",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "344",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "345",
                        "s" : [ {
                           "r" : "346",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "347",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "349",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "350",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "351",
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
               "localId" : "361",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "362",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "345",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "355",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "356",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "353",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "354",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "346",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "366",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "376",
                     "s" : [ {
                        "value" : [ "Sum","(" ]
                     }, {
                        "r" : "367",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "368",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "369",
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
               "localId" : "376",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Sum",
               "signature" : [ {
                  "localId" : "377",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "378",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "367",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "370",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "371",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "368",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "369",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "563",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5",",","0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "229",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
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
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "{","1",",","null","," ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "r" : "238",
                              "value" : [ "-","1" ]
                           } ]
                        }, {
                           "r" : "240",
                           "value" : [ ",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "251",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "234",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "244",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "245",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "239",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "238",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "243",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "240",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "257",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "256",
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
               "localId" : "265",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "266",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "257",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "259",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "260",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "270",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "275",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "277",
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
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "271",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "291",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "292",
                           "value" : [ ",","null","," ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "-" ]
                           }, {
                              "r" : "294",
                              "s" : [ {
                                 "value" : [ "1 ","'ml'" ]
                              } ]
                           } ]
                        }, {
                           "r" : "296",
                           "value" : [ ",","null","," ]
                        }, {
                           "r" : "297",
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
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "307",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "290",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "300",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "298",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "292",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "295",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "294",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "value" : 1,
                        "unit" : "ml",
                        "type" : "Quantity"
                     }
                  }, {
                     "localId" : "299",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "296",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "313",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "2 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "value" : [ "3 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "316",
                           "s" : [ {
                              "value" : [ "4 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "317",
                           "s" : [ {
                              "value" : [ "5 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "318",
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
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "326",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "312",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "319",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "320",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "316",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "317",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "331",
                        "s" : [ {
                           "r" : "332",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "334",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "335",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "337",
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
               "localId" : "347",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "348",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "349",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "331",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "341",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "342",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "339",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "340",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "332",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "334",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "336",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "337",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "352",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "352",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMin",": " ]
                  }, {
                     "r" : "364",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "353",
                        "s" : [ {
                           "r" : "354",
                           "value" : [ "{ ","2",", ","4",", ","8",", ","6"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "364",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "365",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "366",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "353",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "358",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "359",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "354",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "355",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "356",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "357",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "369",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "369",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMin",": " ]
                  }, {
                     "r" : "383",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "370",
                        "s" : [ {
                           "r" : "371",
                           "value" : [ "{ ","5.0",", ","4.9",", ","5.1",", " ]
                        }, {
                           "r" : "374",
                           "s" : [ {
                              "r" : "375",
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
               "localId" : "383",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "384",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "385",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "370",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "377",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "378",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "371",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "372",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.9",
                     "type" : "Literal"
                  }, {
                     "localId" : "373",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.1",
                     "type" : "Literal"
                  }, {
                     "localId" : "374",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "376",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "375",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "5.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "388",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "388",
                  "s" : [ {
                     "value" : [ "","define ","DateMin",": " ]
                  }, {
                     "r" : "411",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "389",
                        "s" : [ {
                           "r" : "394",
                           "value" : [ "{ ","@2012-12-31",", ","@2013-01-01",", ","@2012-01-01"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "411",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "412",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "413",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "389",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "405",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "406",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "394",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "391",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "392",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "393",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "31",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "399",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "396",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "397",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "398",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "404",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "401",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "402",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "403",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "416",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "416",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeMin",": " ]
                  }, {
                     "r" : "448",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "417",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "426",
                           "s" : [ {
                              "r" : "418",
                              "value" : [ "DateTime","(","2012",", ","9",", ","9",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "438",
                           "s" : [ {
                              "r" : "430",
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
               "localId" : "448",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "449",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "450",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "417",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "442",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "443",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "426",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "427",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "428",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "429",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "418",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "419",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "420",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "438",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "439",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "440",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "441",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "430",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "431",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "432",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "453",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "453",
                  "s" : [ {
                     "value" : [ "","define ","TimeMin",": " ]
                  }, {
                     "r" : "497",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "454",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "463",
                           "s" : [ {
                              "r" : "455",
                              "value" : [ "Time","(","12",", ","30",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "475",
                           "s" : [ {
                              "r" : "467",
                              "value" : [ "Time","(","12",", ","30",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "487",
                           "s" : [ {
                              "r" : "479",
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
               "localId" : "497",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "498",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "499",
                     "name" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "454",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "491",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "492",
                        "name" : "{urn:hl7-org:elm-types:r1}Time",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "463",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "464",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "465",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "466",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "455",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "456",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "457",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "475",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "476",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "477",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "478",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "467",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "468",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "469",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "487",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "488",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "489",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "490",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "479",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "480",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "481",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "502",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StringMin",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "502",
                  "s" : [ {
                     "value" : [ "","define ","StringMin",": " ]
                  }, {
                     "r" : "518",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "503",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "504",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "506",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "508",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "510",
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
               "localId" : "518",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "519",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "520",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "503",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "512",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "513",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "506",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "508",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  }, {
                     "localId" : "510",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "523",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MinIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "523",
                  "s" : [ {
                     "value" : [ "","define ","MinIsNull",": " ]
                  }, {
                     "r" : "540",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "524",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "525",
                           "s" : [ {
                              "r" : "526",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "527",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "528",
                           "s" : [ {
                              "r" : "529",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "530",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "531",
                           "s" : [ {
                              "r" : "532",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "533",
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
               "localId" : "540",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "541",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "542",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "524",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "534",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "535",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "525",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "526",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "527",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "528",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "529",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "530",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "531",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "532",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "533",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "545",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "MinIsAlsoNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "545",
                  "s" : [ {
                     "value" : [ "","define ","MinIsAlsoNull",": " ]
                  }, {
                     "r" : "558",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "546",
                        "s" : [ {
                           "r" : "547",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "548",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "549",
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
               "localId" : "558",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "559",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "560",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "546",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "552",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "553",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "548",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "550",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "551",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "549",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "563",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "563",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "573",
                     "s" : [ {
                        "value" : [ "Min","(" ]
                     }, {
                        "r" : "564",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "565",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "566",
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
               "localId" : "573",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Min",
               "signature" : [ {
                  "localId" : "574",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "575",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "564",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "567",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "568",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "565",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "566",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "554",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","10",",","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "229",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
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
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }, {
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
               }
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "248",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "249",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "234",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "241",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "10 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "258",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "259",
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
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "267",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "268",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "253",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "260",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "261",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "274",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "276",
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
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "286",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "272",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "279",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "277",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "278",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "275",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "291",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "10 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "297",
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
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "305",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "291",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "298",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "299",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 10,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "l",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "r" : "311",
                           "value" : [ "{","10"," ," ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "313",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "316",
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
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "327",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "310",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "320",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "321",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "318",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "319",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "311",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "316",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "331",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "331",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "332",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "334",
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
               "localId" : "341",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "342",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "343",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "332",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "335",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "336",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "334",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "/d",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "346",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "356",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "348",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "347",
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
               "localId" : "356",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "357",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "358",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "348",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "350",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "351",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "361",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntegerMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "361",
                  "s" : [ {
                     "value" : [ "","define ","IntegerMax",": " ]
                  }, {
                     "r" : "373",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "362",
                        "s" : [ {
                           "r" : "363",
                           "value" : [ "{ ","2",", ","4",", ","8",", ","6"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "373",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "374",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "375",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "362",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "367",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "368",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "364",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "365",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "DecimalMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "378",
                  "s" : [ {
                     "value" : [ "","define ","DecimalMax",": " ]
                  }, {
                     "r" : "392",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "379",
                        "s" : [ {
                           "r" : "380",
                           "value" : [ "{ ","5.0",", ","4.9",", ","5.1",", " ]
                        }, {
                           "r" : "383",
                           "s" : [ {
                              "r" : "384",
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
               "localId" : "392",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "393",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "394",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "379",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "386",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "387",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "380",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "381",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.9",
                     "type" : "Literal"
                  }, {
                     "localId" : "382",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.1",
                     "type" : "Literal"
                  }, {
                     "localId" : "383",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "Negate",
                     "signature" : [ {
                        "localId" : "385",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "384",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "5.0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "397",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "DateMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "397",
                  "s" : [ {
                     "value" : [ "","define ","DateMax",": " ]
                  }, {
                     "r" : "420",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "398",
                        "s" : [ {
                           "r" : "403",
                           "value" : [ "{ ","@2012-12-31",", ","@2013-01-01",", ","@2012-01-01"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "420",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "421",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "422",
                     "name" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "398",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "414",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "415",
                        "name" : "{urn:hl7-org:elm-types:r1}Date",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "403",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "400",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "401",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "402",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "31",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "408",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "405",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "406",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "407",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "413",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                     "type" : "Date",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "410",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "411",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "412",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "425",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "DateTimeMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "425",
                  "s" : [ {
                     "value" : [ "","define ","DateTimeMax",": " ]
                  }, {
                     "r" : "457",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "426",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "435",
                           "s" : [ {
                              "r" : "427",
                              "value" : [ "DateTime","(","2012",", ","2",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "447",
                           "s" : [ {
                              "r" : "439",
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
               "localId" : "457",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "458",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "459",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "426",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "451",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "452",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "435",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "436",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "437",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "438",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "427",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "428",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "429",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "447",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "448",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "449",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "450",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "439",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "440",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "441",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "462",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "TimeMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "462",
                  "s" : [ {
                     "value" : [ "","define ","TimeMax",": " ]
                  }, {
                     "r" : "506",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "463",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "472",
                           "s" : [ {
                              "r" : "464",
                              "value" : [ "Time","(","12",", ","30",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "484",
                           "s" : [ {
                              "r" : "476",
                              "value" : [ "Time","(","12",", ","30",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "496",
                           "s" : [ {
                              "r" : "488",
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
               "localId" : "506",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "507",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "508",
                     "name" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "463",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "500",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "501",
                        "name" : "{urn:hl7-org:elm-types:r1}Time",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "472",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "473",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "474",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "475",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "464",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "465",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "466",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "484",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "485",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "486",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "487",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "476",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "477",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "478",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "496",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
                     "type" : "Time",
                     "signature" : [ {
                        "localId" : "497",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "498",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "499",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "hour" : {
                        "localId" : "488",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     },
                     "minute" : {
                        "localId" : "489",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "30",
                        "type" : "Literal"
                     },
                     "second" : {
                        "localId" : "490",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "511",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "StringMax",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "511",
                  "s" : [ {
                     "value" : [ "","define ","StringMax",": " ]
                  }, {
                     "r" : "527",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "512",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "513",
                           "s" : [ {
                              "value" : [ "'def'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "515",
                           "s" : [ {
                              "value" : [ "'abc'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "517",
                           "s" : [ {
                              "value" : [ "'jkl'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "519",
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
               "localId" : "527",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "528",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "529",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "512",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "521",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "522",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "513",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "def",
                     "type" : "Literal"
                  }, {
                     "localId" : "515",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "abc",
                     "type" : "Literal"
                  }, {
                     "localId" : "517",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "jkl",
                     "type" : "Literal"
                  }, {
                     "localId" : "519",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "ghi",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "532",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "MaxIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "532",
                  "s" : [ {
                     "value" : [ "","define ","MaxIsNull",": " ]
                  }, {
                     "r" : "549",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "533",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "534",
                           "s" : [ {
                              "r" : "535",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "536",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "537",
                           "s" : [ {
                              "r" : "538",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "539",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "540",
                           "s" : [ {
                              "r" : "541",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "542",
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
               "localId" : "549",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "550",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "551",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "533",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "543",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "544",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "534",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "535",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "536",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "537",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "538",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "539",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "540",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "541",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "542",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "554",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "MaxIsAlsoNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "554",
                  "s" : [ {
                     "value" : [ "","define ","MaxIsAlsoNull",": " ]
                  }, {
                     "r" : "567",
                     "s" : [ {
                        "value" : [ "Max","(" ]
                     }, {
                        "r" : "555",
                        "s" : [ {
                           "r" : "556",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "557",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "558",
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
               "localId" : "567",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Max",
               "signature" : [ {
                  "localId" : "568",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "569",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "555",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "561",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "562",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "556",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "557",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "559",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "560",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "558",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "385",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "236",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "215",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "221",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "222",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "216",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "237",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "240",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "238",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "r" : "248",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "275",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "268",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "269",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "247",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "254",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "255",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "248",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "252",
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "249",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "253",
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "250",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "251",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "270",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "273",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "274",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "271",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "not_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","not_null_q",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "285",
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
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "293",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "280",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "286",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "287",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "299",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "300",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "302",
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
               "localId" : "311",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "312",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "298",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "305",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "306",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "303",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "300",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "304",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "301",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "333",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "317",
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
               "localId" : "333",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "341",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "334",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "335",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "318",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "320",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "321",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "336",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "339",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "340",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "337",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "345",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "358",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "347",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "348",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "349",
                           "s" : [ {
                              "value" : [ "0.03 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "350",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "351",
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
               "localId" : "358",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "359",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "360",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "346",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "352",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "353",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "347",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "348",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "349",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.03,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "350",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "351",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "363",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "380",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "364",
                        "s" : [ {
                           "r" : "365",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "366",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "367",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "368",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "369",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "370",
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
               "localId" : "380",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "381",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "382",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "364",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "374",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "375",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "372",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "373",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "365",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "366",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "367",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "368",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "369",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "370",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "385",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "385",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "395",
                     "s" : [ {
                        "value" : [ "Avg","(" ]
                     }, {
                        "r" : "386",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "387",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "388",
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
               "localId" : "395",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Avg",
               "signature" : [ {
                  "localId" : "396",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "386",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "389",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "390",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "387",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "388",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "561",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "odd",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","odd",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","5",",","1",",","2",",","3",",","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "236",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "215",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "221",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "222",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "216",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
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
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "237",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "240",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "238",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","even",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "r" : "248",
                           "value" : [ "{","5",",","1",",","2",",","3",",","4",",","6","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "275",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "276",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "268",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "269",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "247",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "254",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "255",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "248",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "249",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "250",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "251",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "252",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "270",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "273",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "274",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "271",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "odd_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","odd_q",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "285",
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
               "localId" : "292",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "293",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "294",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "280",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "286",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "287",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "281",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "297",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "even_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "297",
                  "s" : [ {
                     "value" : [ "","define ","even_q",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "299",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "300",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "304",
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
               "localId" : "311",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "312",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "298",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "305",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "306",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "300",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "304",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "330",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "319",
                           "s" : [ {
                              "value" : [ "0.001 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "320",
                           "s" : [ {
                              "value" : [ "0.02 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "321",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "323",
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
               "localId" : "330",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "331",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "332",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "317",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "324",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "325",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.001,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "320",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.02,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "321",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "323",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "335",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "335",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "336",
                        "s" : [ {
                           "r" : "337",
                           "value" : [ "{","5"," ,","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "341",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "342",
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
               "localId" : "361",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "362",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "363",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "336",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "355",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "356",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "344",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "345",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "337",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "347",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "348",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "338",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "350",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "351",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "339",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "353",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "354",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "340",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "341",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "342",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "366",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "366",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "383",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "368",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "367",
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
               "localId" : "383",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "391",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "384",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "385",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "368",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "370",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "371",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "386",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "389",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "390",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "387",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "395",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "416",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "396",
                        "s" : [ {
                           "r" : "397",
                           "value" : [ "{","1",",","null",",","null",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "416",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "424",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "425",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "417",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "418",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "396",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "403",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "404",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "397",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "401",
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "398",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "402",
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "399",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        }, {
                           "localId" : "400",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "419",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "422",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "423",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "420",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "428",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "dup_vals_even",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "428",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_even",": " ]
                  }, {
                     "r" : "451",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "429",
                        "s" : [ {
                           "r" : "430",
                           "value" : [ "{","3",",","1",",","2",",","2",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "451",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "459",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "460",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "452",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "453",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "429",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "438",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "439",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "430",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "431",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "432",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "433",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "434",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "435",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "436",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "437",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "454",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "457",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "458",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "455",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "463",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "dup_vals_odd",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "463",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_odd",":  " ]
                  }, {
                     "r" : "487",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "464",
                        "s" : [ {
                           "r" : "465",
                           "value" : [ "{","3",",","1",",","2",",","2",",","2",",","3",",","4",",","5",",","6","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "487",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "495",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "496",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "488",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "489",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "464",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "474",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "475",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "465",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "466",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "467",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "468",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "469",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "470",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "471",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "472",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "473",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "490",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "493",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "494",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "491",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "499",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "has_null_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "499",
                  "s" : [ {
                     "value" : [ "","define ","has_null_q",": " ]
                  }, {
                     "r" : "513",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "500",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "501",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "502",
                           "value" : [ ",","null",",","null","," ]
                        }, {
                           "r" : "504",
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
               "localId" : "513",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "514",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "515",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "500",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "507",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "508",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "501",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "505",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "502",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "506",
                     "asType" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "503",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "504",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "518",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "dup_vals_even_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "518",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_even_q",": " ]
                  }, {
                     "r" : "534",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "519",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "520",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "521",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "522",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "523",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "524",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "525",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "526",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "527",
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
               "localId" : "534",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "535",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "536",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "519",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "528",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "529",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "520",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "521",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "522",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "523",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "524",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "525",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "526",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "527",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "539",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "dup_vals_odd_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "539",
                  "s" : [ {
                     "value" : [ "","define ","dup_vals_odd_q",":  " ]
                  }, {
                     "r" : "556",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "540",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "541",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "542",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "543",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "544",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "545",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "546",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "547",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "548",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "549",
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
               "localId" : "556",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "557",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "558",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "540",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "550",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "551",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "541",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "542",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "543",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "544",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "545",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "546",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "547",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "548",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "549",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 6,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "561",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "561",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "571",
                     "s" : [ {
                        "value" : [ "Median","(" ]
                     }, {
                        "r" : "562",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "563",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "564",
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
               "localId" : "571",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Median",
               "signature" : [ {
                  "localId" : "572",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "573",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "562",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "565",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "566",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "563",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "564",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "311",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "not_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","not_null",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","2",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "230",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "223",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "224",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
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
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "has_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","has_null",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "{","1",",","null",",","null",",","2",",","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "250",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "243",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "242",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "238",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "239",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "254",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","empty",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "255",
                        "value" : [ "Mode","(","{}",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "263",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "255",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "256",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "257",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "bi_modal",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","bi_modal",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "{","1",",","2",",","2",",","2",",","3",",","3",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "285",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "286",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "268",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "278",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "279",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
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
                  }, {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "289",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "r" : "291",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "295",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "296",
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
               "localId" : "306",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "307",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "308",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "290",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "300",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "301",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "298",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "299",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "291",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "293",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "294",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "295",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "296",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "311",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "321",
                     "s" : [ {
                        "value" : [ "Mode","(" ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "313",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "314",
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
               "localId" : "321",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Mode",
               "signature" : [ {
                  "localId" : "322",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "323",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "312",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "315",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "313",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "309",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "v",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","v",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Variance",
               "signature" : [ {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "236",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "215",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "221",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "222",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "216",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "237",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "240",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "238",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "v_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","v_q",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "252",
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
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Variance",
               "signature" : [ {
                  "localId" : "260",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "247",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "253",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "254",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "248",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "0.003 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "0.04 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "270",
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
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Variance",
               "signature" : [ {
                  "localId" : "278",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "265",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.003,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.04,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "r" : "284",
                           "value" : [ "{","1.0"," ,","2.0"," ,","3.0"," ," ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "288",
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
               "localId" : "304",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Variance",
               "signature" : [ {
                  "localId" : "305",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "306",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "283",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "298",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "299",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "290",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "291",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "284",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "293",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "285",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "296",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "297",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "286",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "3.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "319",
                     "s" : [ {
                        "value" : [ "Variance","(" ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "312",
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
               "localId" : "319",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Variance",
               "signature" : [ {
                  "localId" : "320",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "321",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "310",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "313",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "314",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "311",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "312",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "295",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "v",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","v",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1.0",",","2.0",",","3.0",",","4.0",",","5.0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "PopulationVariance",
               "signature" : [ {
                  "localId" : "228",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "229",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "221",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "222",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "5.0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "v_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","v_q",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "2.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "3.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "238",
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
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationVariance",
               "signature" : [ {
                  "localId" : "246",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "233",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "239",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "236",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "1.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "0.003 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "0.04 ","'dl'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "256",
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
               "localId" : "263",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationVariance",
               "signature" : [ {
                  "localId" : "264",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "251",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "257",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "258",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "253",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.003,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.04,
                     "unit" : "dl",
                     "type" : "Quantity"
                  }, {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "268",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "290",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "269",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "{","1.0"," ,","2.0"," ,","3.0"," ," ]
                        }, {
                           "r" : "273",
                           "s" : [ {
                              "value" : [ "4.0 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "274",
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
               "localId" : "290",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationVariance",
               "signature" : [ {
                  "localId" : "291",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "292",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "269",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "284",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "285",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "276",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "1.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "279",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "271",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "2.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "282",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "283",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "272",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "value" : "3.0",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "274",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5.0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "295",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "295",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "305",
                     "s" : [ {
                        "value" : [ "PopulationVariance","(" ]
                     }, {
                        "r" : "296",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "298",
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
               "localId" : "305",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationVariance",
               "signature" : [ {
                  "localId" : "306",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "307",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "296",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "299",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "300",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "297",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "330",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "std",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","std",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "236",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "215",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "221",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "222",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "216",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "237",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "240",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "238",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "std_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","std_q",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "252",
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
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "260",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "247",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "253",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "254",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "248",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "270",
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
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "278",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "265",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.05,
                     "unit" : "dl",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "sq_throw1",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","sq_throw1",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "284",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "285",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "288",
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
               "localId" : "295",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "296",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "297",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "283",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "289",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "290",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "285",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "286",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "288",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "m",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "300",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "300",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "325",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "301",
                        "s" : [ {
                           "r" : "302",
                           "value" : [ "{","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "306",
                           "value" : [ ",","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "325",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "326",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "327",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "301",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "319",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "320",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "308",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "309",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "302",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "311",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "312",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "303",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "314",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "315",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "304",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "317",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "318",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "306",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "330",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "340",
                     "s" : [ {
                        "value" : [ "StdDev","(" ]
                     }, {
                        "r" : "331",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "332",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "333",
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
               "localId" : "340",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "StdDev",
               "signature" : [ {
                  "localId" : "341",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "342",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "331",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "334",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "335",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "332",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "333",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "312",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "dev",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","dev",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1",",","2",",","3",",","4",",","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "PopulationStdDev",
               "signature" : [ {
                  "localId" : "242",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "243",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "235",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "236",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "215",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "221",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "222",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "216",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "217",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "218",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }, {
                           "localId" : "219",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "220",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "237",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "240",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "238",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "dev_q",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "246",
                  "s" : [ {
                     "value" : [ "","define ","dev_q",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "252",
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
               "localId" : "259",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationStdDev",
               "signature" : [ {
                  "localId" : "260",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "261",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "247",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "253",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "254",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "248",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "252",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "264",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "q_diff_units",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","q_diff_units",": " ]
                  }, {
                     "r" : "277",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "1 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "0.002 ","'l'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "268",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "270",
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
               "localId" : "277",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationStdDev",
               "signature" : [ {
                  "localId" : "278",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "279",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "265",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.002,
                     "unit" : "l",
                     "type" : "Quantity"
                  }, {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "269",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "270",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0.05,
                     "unit" : "dl",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "282",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "282",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "307",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "283",
                        "s" : [ {
                           "r" : "284",
                           "value" : [ "{","1"," ,","2"," ,","3"," ," ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "r" : "288",
                           "value" : [ ",","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "307",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationStdDev",
               "signature" : [ {
                  "localId" : "308",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "309",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "283",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "301",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "302",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "290",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "291",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "284",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "293",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "285",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "296",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "297",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "286",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "287",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "299",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "300",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "288",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "312",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "312",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "value" : [ "PopulationStdDev","(" ]
                     }, {
                        "r" : "313",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "315",
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
               "localId" : "322",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "PopulationStdDev",
               "signature" : [ {
                  "localId" : "323",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "324",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "313",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "316",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "317",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "314",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "395",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "decimal_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","decimal_product",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","1.0",", ","2.0",", ","3.0",", ","4.0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "227",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "1.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "3.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "4.0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "integer_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","integer_product",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","5",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "243",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "244",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "236",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "237",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "zero_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","zero_product",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "r" : "249",
                           "value" : [ "{","0",", ","5",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "259",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "260",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "248",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "252",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "253",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "249",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }, {
                     "localId" : "250",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "263",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantity_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "263",
                  "s" : [ {
                     "value" : [ "","define ","quantity_product",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "265",
                           "s" : [ {
                              "value" : [ "1.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "266",
                           "s" : [ {
                              "value" : [ "2.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "3.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "268",
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
               "localId" : "275",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "276",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "277",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "264",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "269",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "270",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "265",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "266",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "268",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "280",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "quantity_zero_product",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","quantity_zero_product",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "1.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "2.0 ","'g'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "284",
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
               "localId" : "291",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "292",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "293",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "281",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "285",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "286",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "282",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2.0,
                     "unit" : "g",
                     "type" : "Quantity"
                  }, {
                     "localId" : "284",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "g",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "296",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "product_with_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","product_with_null",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "297",
                        "s" : [ {
                           "r" : "298",
                           "value" : [ "{","5",", ","4",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "308",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "309",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "310",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "297",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "302",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "303",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "298",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "299",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "301",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "300",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "313",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "product_of_nulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","product_of_nulls",": " ]
                  }, {
                     "r" : "328",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "315",
                           "s" : [ {
                              "r" : "316",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "317",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           } ]
                        }, {
                           "r" : "318",
                           "value" : [ ", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "328",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "329",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "330",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "314",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "322",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "323",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "315",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "316",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "317",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "320",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "318",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "321",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "319",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "333",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "product_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","product_null",": " ]
                  }, {
                     "r" : "346",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "334",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "337",
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
               "localId" : "346",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "347",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "348",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "334",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "340",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "341",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "335",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "336",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "338",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "339",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "337",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }
            }
         }, {
            "localId" : "351",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "product_quantity_null",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "351",
                  "s" : [ {
                     "value" : [ "","define ","product_quantity_null",": " ]
                  }, {
                     "r" : "368",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "352",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "353",
                           "s" : [ {
                              "r" : "354",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "355",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "356",
                           "s" : [ {
                              "r" : "357",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "358",
                              "s" : [ {
                                 "value" : [ "Quantity" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "359",
                           "s" : [ {
                              "r" : "360",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "361",
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
               "localId" : "368",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "369",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "370",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "352",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "362",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "363",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "353",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "354",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "355",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "356",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "357",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "358",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "359",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "360",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "361",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "373",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "NumbersAndQuantities",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "373",
                  "s" : [ {
                     "value" : [ "","define ","NumbersAndQuantities",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "374",
                        "s" : [ {
                           "r" : "375",
                           "value" : [ "{","1"," ," ]
                        }, {
                           "r" : "376",
                           "s" : [ {
                              "value" : [ "2 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "377",
                           "s" : [ {
                              "value" : [ "3 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "378",
                           "s" : [ {
                              "value" : [ "4 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "379",
                           "s" : [ {
                              "value" : [ "5 ","'ml'" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "380",
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
               "localId" : "390",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "391",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "392",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "374",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "384",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "385",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "382",
                     "type" : "ToQuantity",
                     "signature" : [ {
                        "localId" : "383",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "375",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "376",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 2,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "377",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 3,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "378",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 4,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "379",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 5,
                     "unit" : "ml",
                     "type" : "Quantity"
                  }, {
                     "localId" : "380",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 0,
                     "unit" : "ml",
                     "type" : "Quantity"
                  } ]
               }
            }
         }, {
            "localId" : "395",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "IncompatibleUnitsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "395",
                  "s" : [ {
                     "value" : [ "","define ","IncompatibleUnitsNull",": " ]
                  }, {
                     "r" : "405",
                     "s" : [ {
                        "value" : [ "Product","(" ]
                     }, {
                        "r" : "396",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "397",
                           "s" : [ {
                              "value" : [ "1 ","'mg/d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "398",
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
               "localId" : "405",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Product",
               "signature" : [ {
                  "localId" : "406",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "407",
                     "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "396",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "399",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "400",
                        "name" : "{urn:hl7-org:elm-types:r1}Quantity",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "397",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                     "value" : 1,
                     "unit" : "mg/d",
                     "type" : "Quantity"
                  }, {
                     "localId" : "398",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "307",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "decimal_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","decimal_geometric_mean",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","2.0",", ","8.0",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "GeometricMean",
               "signature" : [ {
                  "localId" : "227",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "8.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "218",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "zero_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","zero_geometric_mean",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","2.0",", ","8.0",", ","0","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "GeometricMean",
               "signature" : [ {
                  "localId" : "246",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "247",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "239",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "240",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "2.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "value" : "8.0",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "238",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "0",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "null_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","null_geometric_mean",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "252",
                           "value" : [ "{","1",", ","2",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "GeometricMean",
               "signature" : [ {
                  "localId" : "277",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "278",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "270",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "271",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "251",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "256",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "257",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "252",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "253",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "255",
                           "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "As",
                           "signature" : [ ],
                           "operand" : {
                              "localId" : "254",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "Null"
                           }
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "272",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "275",
                        "type" : "ToDecimal",
                        "signature" : [ {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        } ],
                        "operand" : {
                           "localId" : "273",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "281",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "all_nulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "281",
                  "s" : [ {
                     "value" : [ "","define ","all_nulls",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "r" : "283",
                           "value" : [ "{","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "GeometricMean",
               "signature" : [ {
                  "localId" : "303",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "304",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "298",
                  "type" : "Query",
                  "source" : [ {
                     "localId" : "299",
                     "alias" : "X",
                     "expression" : {
                        "localId" : "282",
                        "type" : "List",
                        "resultTypeSpecifier" : {
                           "localId" : "286",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "287",
                              "name" : "{urn:hl7-org:elm-types:r1}Any",
                              "type" : "NamedTypeSpecifier"
                           }
                        },
                        "element" : [ {
                           "localId" : "283",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }, {
                           "localId" : "284",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        }, {
                           "localId" : "285",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                           "type" : "Null"
                        } ]
                     }
                  } ],
                  "let" : [ ],
                  "relationship" : [ ],
                  "return" : {
                     "localId" : "300",
                     "distinct" : false,
                     "expression" : {
                        "localId" : "302",
                        "asType" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "As",
                        "signature" : [ ],
                        "operand" : {
                           "localId" : "301",
                           "name" : "X",
                           "type" : "AliasRef"
                        }
                     }
                  }
               }
            }
         }, {
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "also_null_geometric_mean",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "307",
                  "s" : [ {
                     "value" : [ "","define ","also_null_geometric_mean",": " ]
                  }, {
                     "r" : "320",
                     "s" : [ {
                        "value" : [ "GeometricMean","(" ]
                     }, {
                        "r" : "308",
                        "s" : [ {
                           "r" : "309",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "310",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "311",
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
               "localId" : "320",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "GeometricMean",
               "signature" : [ {
                  "localId" : "321",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "322",
                     "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "308",
                  "strict" : false,
                  "type" : "As",
                  "resultTypeSpecifier" : {
                     "localId" : "314",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "315",
                        "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "309",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "310",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "312",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "313",
                           "name" : "{urn:hl7-org:elm-types:r1}Decimal",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "311",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "269",
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
            "name" : "at",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","at",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","true",",","true",",","true",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AllTrue",
               "signature" : [ {
                  "localId" : "227",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","atwn",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","true",",","true",",","null",",","null",",","true",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AllTrue",
               "signature" : [ {
                  "localId" : "248",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "249",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "241",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atf",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","atf",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "{","true",",","true",",","true",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AllTrue",
               "signature" : [ {
                  "localId" : "265",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "253",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "258",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atfwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","atfwn",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "AllTrue","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "{","true",",","true",",","null",",","null",",","true",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AllTrue",
               "signature" : [ {
                  "localId" : "286",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "270",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "279",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "278",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "269",
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
            "name" : "at",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","at",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "r" : "216",
                           "value" : [ "{","true",",","false",",","false",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyTrue",
               "signature" : [ {
                  "localId" : "227",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "228",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "215",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "220",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "221",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","atwn",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","true",",","false",",","null",",","null",",","false",",","true","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyTrue",
               "signature" : [ {
                  "localId" : "248",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "249",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "241",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "237",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "238",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "true",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atf",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","atf",": " ]
                  }, {
                     "r" : "264",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "253",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "{","false",",","false",",","false",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "264",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyTrue",
               "signature" : [ {
                  "localId" : "265",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "253",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "258",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "254",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "255",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "256",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "257",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "atfwn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","atfwn",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "value" : [ "AnyTrue","(" ]
                     }, {
                        "r" : "270",
                        "s" : [ {
                           "r" : "271",
                           "value" : [ "{","false",",","false",",","null",",","null",",","false",",","false","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "AnyTrue",
               "signature" : [ {
                  "localId" : "286",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "287",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "source" : {
                  "localId" : "270",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "279",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "280",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "272",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "273",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "278",
                     "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "value" : "false",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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

