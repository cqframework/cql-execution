/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* List
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Three: 1 + 2
define IntList: { 9, 7, 8 }
define StringList: { 'a', 'bee', 'see' }
define MixedList: List<Any>{ 1, 'two', Three }
define EmptyList: List<Integer>{}
*/

module.exports['List'] = {
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
            "r" : "237",
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
            "name" : "Three",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Three",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "1"," + ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Add",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "217",
            "name" : "IntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","IntList",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "{ ","9",", ","7",", ","8"," }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "List",
               "element" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               }, {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "8",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "StringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","StringList",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "'bee'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'see'" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "List",
               "element" : [ {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }, {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "bee",
                  "type" : "Literal"
               }, {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "see",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "229",
            "name" : "MixedList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","MixedList",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "Any" ]
                        } ]
                     }, {
                        "r" : "233",
                        "value" : [ ">{ ","1",", " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "value" : [ "'two'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "Three" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "List",
               "element" : [ {
                  "localId" : "233",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "two",
                  "type" : "Literal"
               }, {
                  "localId" : "235",
                  "name" : "Three",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "EmptyList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","EmptyList",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     }, {
                        "value" : [ ">{}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "List",
               "element" : [ ]
            }
         } ]
      }
   }
}

/* Exists
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define EmptyList: exists (List<Integer>{})
define FullList: exists ({ 1, 2, 3 })
define ListWithOneNull: exists ({ null })
define ListWithTwoNulls: exists ({ null, null })
define ListStartingWithNull: exists ({ null, 3, 4 })
define ListWithNull: exists ({ 3, null, 5 })
define NullExists: exists (null)
*/

module.exports['Exists'] = {
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
            "r" : "252",
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
            "name" : "EmptyList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","EmptyList",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "214",
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
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "215",
                  "type" : "List",
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "218",
            "name" : "FullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","FullList",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "220",
                           "s" : [ {
                              "r" : "221",
                              "value" : [ "{ ","1",", ","2",", ","3"," }" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "225",
            "name" : "ListWithOneNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","ListWithOneNull",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "value" : [ "{ ","null"," }" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "228",
                     "type" : "Null"
                  } ]
               }
            }
         }, {
            "localId" : "230",
            "name" : "ListWithTwoNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","ListWithTwoNulls",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "r" : "233",
                              "value" : [ "{ ","null",", ","null"," }" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "type" : "Null"
                  }, {
                     "localId" : "234",
                     "type" : "Null"
                  } ]
               }
            }
         }, {
            "localId" : "236",
            "name" : "ListStartingWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","ListStartingWithNull",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "r" : "239",
                              "value" : [ "{ ","null",", ","3",", ","4"," }" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "238",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "242",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "239",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "244",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "r" : "247",
                              "value" : [ "{ ","3",", ","null",", ","5"," }" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "250",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "248",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "252",
            "name" : "NullExists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "252",
                  "s" : [ {
                     "value" : [ "","define ","NullExists",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "254",
                        "s" : [ {
                           "r" : "254",
                           "value" : [ "(","null",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "Exists",
               "signature" : [ ],
               "operand" : {
                  "localId" : "255",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "254",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "256",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "257",
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

/* Equal
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define EqualIntList: {1, 2, 3} = {1, 2, 3}
define UnequalIntList: {1, 2, 3} = {1, 2}
define ReverseIntList: {1, 2, 3} = {3, 2, 1}
define EqualStringList: {'hello', 'world'} = {'hello', 'world'}
define UnequalStringList: {'hello', 'world'} = {'foo', 'bar'}
define EqualTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } = List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} }
define UnequalTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } = List<Any>{ Tuple{a: 1, b: Tuple{c: -1}}, Tuple{x: 'y', z: 2} }
define FirstListHasNull: {'hello', 'world', (null as String)} = {'hello', 'world'}
define SecondListHasNull: {'hello', 'world'} = {'hello', 'world', (null as String)}
define BothListsHaveNull: List<Integer>{(null as Integer)} = List<Integer>{(null as Integer)}
*/

module.exports['Equal'] = {
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
            "r" : "333",
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
            "name" : "EqualIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","EqualIntList",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
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
                  } ]
               }, {
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
                  } ]
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "UnequalIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","UnequalIntList",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "229",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "229",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "233",
            "name" : "ReverseIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","ReverseIntList",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "{","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "235",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "239",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "EqualStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","EqualStringList",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "253",
            "name" : "UnequalStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","UnequalStringList",": " ]
                  }, {
                     "r" : "254",
                     "s" : [ {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "256",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "257",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "259",
                           "s" : [ {
                              "value" : [ "'foo'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "value" : [ "'bar'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "254",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "255",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "256",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "257",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "258",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "bar",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "262",
            "name" : "EqualTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "262",
                  "s" : [ {
                     "value" : [ "","define ","EqualTupleList",": " ]
                  }, {
                     "r" : "263",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "267",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "268",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "269",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "270",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "271",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "272",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "273",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "274",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "277",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "278",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "279",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "280",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "281",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "282",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "283",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "263",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "265",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "267",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "268",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "269",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "270",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "271",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "272",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "273",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "275",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "277",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "279",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "280",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "281",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "282",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "283",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "285",
            "name" : "UnequalTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","UnequalTupleList",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "287",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "290",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "291",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "292",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "293",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "294",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "295",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "296",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "298",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "297",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "300",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "301",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "302",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "c",": " ]
                                    }, {
                                       "r" : "303",
                                       "s" : [ {
                                          "r" : "304",
                                          "value" : [ "-","1" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "306",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "307",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "288",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "290",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "292",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "293",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "294",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "295",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "296",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "298",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "300",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "301",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "302",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "303",
                                 "type" : "Negate",
                                 "signature" : [ ],
                                 "operand" : {
                                    "localId" : "304",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "305",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "306",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "307",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "309",
            "name" : "FirstListHasNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "309",
                  "s" : [ {
                     "value" : [ "","define ","FirstListHasNull",": " ]
                  }, {
                     "r" : "310",
                     "s" : [ {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "312",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "313",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "314",
                              "s" : [ {
                                 "r" : "315",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "316",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "317",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "319",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "310",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "311",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "312",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "313",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  }, {
                     "localId" : "314",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "315",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "316",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "317",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "318",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "319",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "321",
            "name" : "SecondListHasNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "321",
                  "s" : [ {
                     "value" : [ "","define ","SecondListHasNull",": " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "r" : "323",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "324",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "325",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "326",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "327",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "328",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "329",
                              "s" : [ {
                                 "r" : "330",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "331",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "322",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "323",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "326",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "327",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "328",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  }, {
                     "localId" : "329",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "330",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "331",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "BothListsHaveNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","BothListsHaveNull",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "r" : "336",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "335",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{" ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "338",
                              "s" : [ {
                                 "r" : "339",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "340",
                                 "s" : [ {
                                    "value" : [ "Integer" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "342",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "341",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{" ]
                        }, {
                           "r" : "344",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "344",
                              "s" : [ {
                                 "r" : "345",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "346",
                                 "s" : [ {
                                    "value" : [ "Integer" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "334",
               "type" : "Equal",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "336",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "338",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "339",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "340",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "342",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "344",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "345",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "346",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* NotEqual
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define EqualIntList: {1, 2, 3} != {1, 2, 3}
define UnequalIntList: {1, 2, 3} != {1, 2}
define ReverseIntList: {1, 2, 3} != {3, 2, 1}
define EqualStringList: {'hello', 'world'} != {'hello', 'world'}
define UnequalStringList: {'hello', 'world'} != {'foo', 'bar'}
define EqualTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } != List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} }
define UnequalTupleList: List<Any>{ Tuple{a: 1, b: Tuple{c: 1}}, Tuple{x: 'y', z: 2} } != List<Any>{ Tuple{a: 1, b: Tuple{c: -1}}, Tuple{x: 'y', z: 2} }
*/

module.exports['NotEqual'] = {
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
            "r" : "291",
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
            "name" : "EqualIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","EqualIntList",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
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
                     } ]
                  }, {
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
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "224",
            "name" : "UnequalIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","UnequalIntList",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "r" : "226",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "r" : "231",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "226",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "229",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "230",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "235",
            "name" : "ReverseIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","ReverseIntList",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "r" : "242",
                           "value" : [ "{","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "236",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "237",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "241",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "242",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "243",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "244",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "247",
            "name" : "EqualStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","EqualStringList",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "248",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "249",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "250",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "251",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "252",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "253",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "254",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "257",
            "name" : "UnequalStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","UnequalStringList",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "r" : "259",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "260",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "263",
                           "s" : [ {
                              "value" : [ "'foo'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "264",
                           "s" : [ {
                              "value" : [ "'bar'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "258",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "259",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "260",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "261",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "262",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "263",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "264",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "267",
            "name" : "EqualTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","EqualTupleList",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "270",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "269",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "272",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "273",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "274",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "275",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "277",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "278",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "283",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "284",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "285",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "287",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "288",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "268",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "270",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "272",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "273",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "274",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "275",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "276",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "277",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "278",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  }, {
                     "localId" : "280",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "282",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "283",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "284",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "285",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "286",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "287",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "288",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "291",
            "name" : "UnequalTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","UnequalTupleList",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "293",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "296",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "297",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "298",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "299",
                                       "value" : [ "c",": ","1" ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "300",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "301",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "302",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "307",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "308",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "c",": " ]
                                    }, {
                                       "r" : "309",
                                       "s" : [ {
                                          "r" : "310",
                                          "value" : [ "-","1" ]
                                       } ]
                                    } ]
                                 }, {
                                    "value" : [ "}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "312",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "313",
                                 "value" : [ "z",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "type" : "Not",
               "signature" : [ ],
               "operand" : {
                  "localId" : "292",
                  "type" : "Equal",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "294",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "296",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "297",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "298",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "299",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "300",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "301",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "302",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  }, {
                     "localId" : "304",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "306",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "307",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "308",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "309",
                                    "type" : "Negate",
                                    "signature" : [ ],
                                    "operand" : {
                                       "localId" : "310",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "1",
                                       "type" : "Literal"
                                    }
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "311",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "312",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "313",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  } ]
               }
            }
         } ]
      }
   }
}

/* Union
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define OneToTen: {1, 2, 3, 4, 5} union {6, 7, 8, 9, 10}
define OneToFiveOverlapped: {1, 2, 3, 4} union {3, 4, 5}
define OneToFiveOverlappedWithNulls: {1, null, 2, 3, 4} union {3, 4, 5, null}
define Disjoint: {1, 2} union {4, 5}
define NestedToFifteen: {1, 2, 3} union {4, 5, 6} union {7 ,8 , 9} union {10, 11, 12} union {13, 14, 15}
define NullUnion: null union {1, 2, 3}
define UnionNull: {1, 2, 3} union null
define nullUnionNull: (null as List<String>) union (null as List<String>)
*/

module.exports['Union'] = {
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
            "r" : "313",
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
            "name" : "OneToTen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","OneToTen",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "{","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "219",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "OneToFiveOverlapped",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","OneToFiveOverlapped",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "r" : "234",
                           "value" : [ "{","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "237",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "233",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "239",
            "name" : "OneToFiveOverlappedWithNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","OneToFiveOverlappedWithNulls",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "240",
                        "s" : [ {
                           "r" : "241",
                           "value" : [ "{","1",", ","null",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "r" : "248",
                           "value" : [ "{","3",", ","4",", ","5",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "240",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "242",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "247",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "251",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "255",
            "name" : "Disjoint",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","Disjoint",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "256",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "259",
                        "s" : [ {
                           "r" : "260",
                           "value" : [ "{","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "256",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "257",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "259",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "264",
            "name" : "NestedToFifteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","NestedToFifteen",": " ]
                  }, {
                     "r" : "289",
                     "s" : [ {
                        "r" : "284",
                        "s" : [ {
                           "r" : "278",
                           "s" : [ {
                              "r" : "273",
                              "s" : [ {
                                 "r" : "265",
                                 "s" : [ {
                                    "r" : "266",
                                    "value" : [ "{","1",", ","2",", ","3","}" ]
                                 } ]
                              }, {
                                 "value" : [ " union " ]
                              }, {
                                 "r" : "269",
                                 "s" : [ {
                                    "r" : "270",
                                    "value" : [ "{","4",", ","5",", ","6","}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " union " ]
                           }, {
                              "r" : "274",
                              "s" : [ {
                                 "r" : "275",
                                 "value" : [ "{","7"," ,","8"," , ","9","}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "r" : "280",
                              "value" : [ "{","10",", ","11",", ","12","}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "r" : "286",
                           "value" : [ "{","13",", ","14",", ","15","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "289",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "284",
                  "type" : "Union",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "273",
                     "type" : "Union",
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
                        } ]
                     }, {
                        "localId" : "269",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "270",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "271",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "272",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "localId" : "283",
                     "type" : "Union",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "274",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "275",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        }, {
                           "localId" : "276",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "8",
                           "type" : "Literal"
                        }, {
                           "localId" : "277",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "9",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "279",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "280",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "11",
                           "type" : "Literal"
                        }, {
                           "localId" : "282",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        } ]
                     } ]
                  } ]
               }, {
                  "localId" : "285",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "286",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }, {
                     "localId" : "287",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }, {
                     "localId" : "288",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "291",
            "name" : "NullUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "291",
                  "s" : [ {
                     "value" : [ "","define ","NullUnion",": " ]
                  }, {
                     "r" : "297",
                     "s" : [ {
                        "r" : "292",
                        "value" : [ "null"," union " ]
                     }, {
                        "r" : "293",
                        "s" : [ {
                           "r" : "294",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "297",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "298",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "292",
                     "type" : "Null"
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
               }, {
                  "localId" : "293",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "294",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "295",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "296",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "302",
            "name" : "UnionNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "302",
                  "s" : [ {
                     "value" : [ "","define ","UnionNull",": " ]
                  }, {
                     "r" : "308",
                     "s" : [ {
                        "r" : "303",
                        "s" : [ {
                           "r" : "304",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "307",
                        "value" : [ " union ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "308",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "303",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "304",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "305",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "306",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "309",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "307",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "310",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "311",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "313",
            "name" : "nullUnionNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "313",
                  "s" : [ {
                     "value" : [ "","define ","nullUnionNull",": " ]
                  }, {
                     "r" : "322",
                     "s" : [ {
                        "r" : "314",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "r" : "315",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "316",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "317",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              }, {
                                 "value" : [ ">" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "318",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "318",
                           "s" : [ {
                              "r" : "319",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "320",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "321",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              }, {
                                 "value" : [ ">" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "322",
               "type" : "Union",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "314",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "315",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "316",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "317",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "318",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "319",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "320",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "321",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         } ]
      }
   }
}

/* Except
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ExceptThreeFour: {1, 2, 3, 4, 5} except {3, 4}
define ThreeFourExcept: {3, 4} except {1, 2, 3, 4, 5}
define ExceptFiveThree: {1, 2, 3, 4, 5} except {5, 3}
define ExceptNoOp: {1, 2, 3, 3, 4, 5} except {6, 7, 8, 9, 10}
define ExceptEverything: {1, 2, 3, 3, 4, 5} except {1, 2, 3, 4, 5}
define MultipleNullExcept: {1, 3, 5, 7, null, null} except {null, 3}

define SomethingExceptNothing: {1, 2, 3, 4, 5} except List<Integer>{}
define NothingExceptSomething: List<Integer>{} except {1, 2, 3, 4, 5}
define ExceptTuples: {Tuple{a: 1}, Tuple{a: 2}, Tuple{a: 3}} except {Tuple{a: 2}}
define ExceptNull: {1, 2, 3, 4, 5} except null
define NullExcept: null except {1, 2, 3, 4, 5}
*/

module.exports['Except'] = {
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
            "name" : "ExceptThreeFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ExceptThreeFour",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "{","3",", ","4","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "219",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "ThreeFourExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","ThreeFourExcept",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "{","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "236",
            "name" : "ExceptFiveThree",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "236",
                  "s" : [ {
                     "value" : [ "","define ","ExceptFiveThree",": " ]
                  }, {
                     "r" : "246",
                     "s" : [ {
                        "r" : "237",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "{","5",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "246",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "237",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "243",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "248",
            "name" : "ExceptNoOp",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","ExceptNoOp",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "r" : "250",
                           "value" : [ "{","1",", ","2",", ","3",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "r" : "257",
                           "value" : [ "{","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "255",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "256",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "257",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "264",
            "name" : "ExceptEverything",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","ExceptEverything",": " ]
                  }, {
                     "r" : "278",
                     "s" : [ {
                        "r" : "265",
                        "s" : [ {
                           "r" : "266",
                           "value" : [ "{","1",", ","2",", ","3",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "272",
                        "s" : [ {
                           "r" : "273",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "278",
               "type" : "Except",
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
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "272",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "274",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "280",
            "name" : "MultipleNullExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "280",
                  "s" : [ {
                     "value" : [ "","define ","MultipleNullExcept",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "r" : "281",
                        "s" : [ {
                           "r" : "282",
                           "value" : [ "{","1",", ","3",", ","5",", ","7",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "290",
                        "s" : [ {
                           "r" : "291",
                           "value" : [ "{","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "294",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "281",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "285",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "288",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "286",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "289",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "287",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "290",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "293",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "291",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "292",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "296",
            "name" : "SomethingExceptNothing",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","SomethingExceptNothing",": " ]
                  }, {
                     "r" : "306",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "r" : "298",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "303",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "306",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "298",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "299",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "300",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "301",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "302",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "304",
                  "type" : "List",
                  "element" : [ ]
               } ]
            }
         }, {
            "localId" : "308",
            "name" : "NothingExceptSomething",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "308",
                  "s" : [ {
                     "value" : [ "","define ","NothingExceptSomething",": " ]
                  }, {
                     "r" : "318",
                     "s" : [ {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "309",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "312",
                        "s" : [ {
                           "r" : "313",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "318",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "310",
                  "type" : "List",
                  "element" : [ ]
               }, {
                  "localId" : "312",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "313",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "314",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "315",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "316",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "317",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "320",
            "name" : "ExceptTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "320",
                  "s" : [ {
                     "value" : [ "","define ","ExceptTuples",": " ]
                  }, {
                     "r" : "331",
                     "s" : [ {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "323",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "324",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "325",
                                 "value" : [ "a",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "327",
                                 "value" : [ "a",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "328",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "329",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "330",
                                 "value" : [ "a",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "331",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "321",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "322",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "323",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "324",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "325",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "326",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "327",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "328",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "329",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "330",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "ExceptNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","ExceptNull",": " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "r" : "334",
                        "s" : [ {
                           "r" : "335",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "340",
                        "value" : [ " except ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "341",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "334",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "335",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "336",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "337",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "338",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "342",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "340",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "343",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "344",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "346",
            "name" : "NullExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "346",
                  "s" : [ {
                     "value" : [ "","define ","NullExcept",": " ]
                  }, {
                     "r" : "354",
                     "s" : [ {
                        "r" : "347",
                        "value" : [ "null"," except " ]
                     }, {
                        "r" : "348",
                        "s" : [ {
                           "r" : "349",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "354",
               "type" : "Except",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "355",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "347",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "356",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "357",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "348",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "350",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "351",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "352",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "353",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* Intersect
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NoIntersection: {1, 2, 2, 3} intersect {4, 5, 6}
define IntersectOnFive: {4, 5, 5, 6} intersect {1, 3, 5, 7}
define IntersectionOnFourDuplicates: {4, 4, 1, 1, 2} intersect {4, 4, 3, 9}
define IntersectOnEvens: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} intersect {0, 2, 4, 6, 8, 10, 12}
define IntersectOnAll: {1, 2, 3, 4, 5} intersect {5, 4, 3, 2, 1}
define NestedIntersects: {1, 2, 3, 4, 5} intersect {2, 3, 4, 5, 6} intersect {3, 4, 5, 6, 7} intersect {4, 5, 6, 7, 8}
define IntersectTuples: {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}} intersect {Tuple{a:2, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}, Tuple{a:5, b:'e'}}
define NullIntersect: null intersect {1, 2, 3}
define IntersectNull: {1, 2, 3} intersect null
define MultipleNullInListIntersect: {1, 2, 3, null} intersect {null, 3}
*/

module.exports['Intersect'] = {
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
            "name" : "NoIntersection",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NoIntersection",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "r" : "219",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
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
                  } ]
               }, {
                  "localId" : "218",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "IntersectOnFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnFive",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "{","4",", ","5",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "r" : "231",
                           "value" : [ "{","1",", ","3",", ","5",", ","7","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "225",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "230",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "237",
            "name" : "IntersectionOnFourDuplicates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","IntersectionOnFourDuplicates",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "238",
                        "s" : [ {
                           "r" : "239",
                           "value" : [ "{","4",", ","4",", ","1",", ","1",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "{","4",", ","4",", ","3",", ","9","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "238",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "244",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "251",
            "name" : "IntersectOnEvens",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnEvens",": " ]
                  }, {
                     "r" : "271",
                     "s" : [ {
                        "r" : "252",
                        "s" : [ {
                           "r" : "253",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5",", ","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "r" : "264",
                           "value" : [ "{","0",", ","2",", ","4",", ","6",", ","8",", ","10",", ","12","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "271",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "252",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "255",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "256",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "257",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "258",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "259",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "260",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "263",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }, {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }, {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "273",
            "name" : "IntersectOnAll",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnAll",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "r" : "274",
                        "s" : [ {
                           "r" : "275",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "280",
                        "s" : [ {
                           "r" : "281",
                           "value" : [ "{","5",", ","4",", ","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "274",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "275",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "278",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "279",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "280",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "285",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "288",
            "name" : "NestedIntersects",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "288",
                  "s" : [ {
                     "value" : [ "","define ","NestedIntersects",": " ]
                  }, {
                     "r" : "316",
                     "s" : [ {
                        "r" : "308",
                        "s" : [ {
                           "r" : "301",
                           "s" : [ {
                              "r" : "289",
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                              } ]
                           }, {
                              "value" : [ " intersect " ]
                           }, {
                              "r" : "295",
                              "s" : [ {
                                 "r" : "296",
                                 "value" : [ "{","2",", ","3",", ","4",", ","5",", ","6","}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " intersect " ]
                        }, {
                           "r" : "302",
                           "s" : [ {
                              "r" : "303",
                              "value" : [ "{","3",", ","4",", ","5",", ","6",", ","7","}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "r" : "310",
                           "value" : [ "{","4",", ","5",", ","6",", ","7",", ","8","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "316",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "301",
                  "type" : "Intersect",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "289",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "290",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "291",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "292",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "293",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "294",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "295",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "297",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "298",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "299",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "300",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "localId" : "315",
                  "type" : "Intersect",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "302",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "303",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "304",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "305",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "306",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "307",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "309",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "310",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "311",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "312",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "313",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "314",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "IntersectTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","IntersectTuples",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "r" : "319",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "320",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "321",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "322",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "323",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "324",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "325",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "326",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "327",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "328",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "329",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "330",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "331",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "332",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "333",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "334",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "335",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "336",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "337",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "338",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "339",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "340",
                                 "value" : [ "a",":","5" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "341",
                                 "s" : [ {
                                    "value" : [ "'e'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "342",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "319",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "320",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "321",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "322",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "323",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "324",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "325",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "326",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "327",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "328",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "329",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "330",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "331",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "332",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "333",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "334",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "335",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "336",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "337",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "338",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "339",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "340",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "341",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "e",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "344",
            "name" : "NullIntersect",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "344",
                  "s" : [ {
                     "value" : [ "","define ","NullIntersect",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "r" : "345",
                        "value" : [ "null"," intersect " ]
                     }, {
                        "r" : "346",
                        "s" : [ {
                           "r" : "347",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "350",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "351",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "345",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "352",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "353",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "346",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "347",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "348",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "349",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "355",
            "name" : "IntersectNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "355",
                  "s" : [ {
                     "value" : [ "","define ","IntersectNull",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "r" : "356",
                        "s" : [ {
                           "r" : "357",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "360",
                        "value" : [ " intersect ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "361",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "356",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "357",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "358",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "359",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "362",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "360",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "363",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "364",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "366",
            "name" : "MultipleNullInListIntersect",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "366",
                  "s" : [ {
                     "value" : [ "","define ","MultipleNullInListIntersect",": " ]
                  }, {
                     "r" : "377",
                     "s" : [ {
                        "r" : "367",
                        "s" : [ {
                           "r" : "368",
                           "value" : [ "{","1",", ","2",", ","3",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "373",
                        "s" : [ {
                           "r" : "374",
                           "value" : [ "{","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "377",
               "type" : "Intersect",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "367",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "368",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "369",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "370",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "372",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "371",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "373",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "376",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "374",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "375",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* IndexOf
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IndexOfSecond: IndexOf({'a', 'b', 'c', 'd'}, 'b')
define IndexOfThirdTuple: IndexOf({Tuple{a: 1}, Tuple{a: 2}, Tuple{a: 3}}, Tuple{a: 3})
define MultipleMatches: IndexOf({'a', 'b', 'c', 'd', 'd', 'e', 'd'}, 'd')
define ItemNotFound: IndexOf({'a', 'b', 'c'}, 'd')
define NullList: IndexOf(null, 'a')
define NullItem: IndexOf({'a', 'b', 'c'}, null)
define ListCode: IndexOf({Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5', display: 'foo'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5', display: 'foo'})
define ListCodeUndefined: IndexOf({Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'})
define ListWrongCode: IndexOf({Code{code: 'M', system: '2.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'foo'})
define ListWrongCodeSystem: IndexOf({Code{code: 'F', system: '1.16.840.1.113883.18.2', version: 'HL7V2.5'}}, Code{code: 'F', system: '2.16.840.1.113883.18.2', version: 'foo'})
*/

module.exports['IndexOf'] = {
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
            "r" : "336",
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
            "name" : "IndexOfSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IndexOfSecond",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "214",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "217",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "'b'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "218",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "b",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "223",
            "name" : "IndexOfThirdTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","IndexOfThirdTuple",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "226",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "228",
                                 "value" : [ "a",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "230",
                                 "value" : [ "a",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "232",
                              "value" : [ "a",": ","3" ]
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
               "localId" : "235",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "224",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "225",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "226",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "227",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "228",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "229",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "230",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "231",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "237",
            "name" : "MultipleMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","MultipleMatches",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "244",
                           "s" : [ {
                              "value" : [ "'e'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "245",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "'d'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "238",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  }, {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  }, {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "e",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "246",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "251",
            "name" : "ItemNotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "251",
                  "s" : [ {
                     "value" : [ "","define ","ItemNotFound",": " ]
                  }, {
                     "r" : "259",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "254",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "256",
                        "s" : [ {
                           "value" : [ "'d'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "259",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "252",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "255",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "256",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "261",
            "name" : "NullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","NullList",": " ]
                  }, {
                     "r" : "269",
                     "s" : [ {
                        "r" : "262",
                        "value" : [ "IndexOf","(","null",", " ]
                     }, {
                        "r" : "263",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "269",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "270",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "262",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "element" : {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "274",
            "name" : "NullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","NullItem",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "277",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "278",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "279",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "275",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "276",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "278",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "284",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "279",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "286",
            "name" : "ListCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "286",
                  "s" : [ {
                     "value" : [ "","define ","ListCode",": " ]
                  }, {
                     "r" : "302",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "287",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "288",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "290",
                                 "s" : [ {
                                    "value" : [ "'F'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "291",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "version",": " ]
                              }, {
                                 "r" : "292",
                                 "s" : [ {
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "display",": " ]
                              }, {
                                 "r" : "293",
                                 "s" : [ {
                                    "value" : [ "'foo'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "294",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "296",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "297",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "298",
                              "s" : [ {
                                 "value" : [ "'HL7V2.5'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "display",": " ]
                           }, {
                              "r" : "299",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
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
               "localId" : "302",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "287",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "288",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "290",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "292",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "display",
                        "value" : {
                           "localId" : "293",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "foo",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "294",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "296",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "297",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "298",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "display",
                     "value" : {
                        "localId" : "299",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "304",
            "name" : "ListCodeUndefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "304",
                  "s" : [ {
                     "value" : [ "","define ","ListCodeUndefined",": " ]
                  }, {
                     "r" : "318",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "305",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "306",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "308",
                                 "s" : [ {
                                    "value" : [ "'F'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "309",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "version",": " ]
                              }, {
                                 "r" : "310",
                                 "s" : [ {
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "313",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "314",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "315",
                              "s" : [ {
                                 "value" : [ "'HL7V2.5'" ]
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
               "localId" : "318",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "305",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "306",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "308",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "309",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "310",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "311",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "313",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "314",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "315",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "320",
            "name" : "ListWrongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "320",
                  "s" : [ {
                     "value" : [ "","define ","ListWrongCode",": " ]
                  }, {
                     "r" : "334",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "321",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "322",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "324",
                                 "s" : [ {
                                    "value" : [ "'M'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "325",
                                 "s" : [ {
                                    "value" : [ "'2.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "version",": " ]
                              }, {
                                 "r" : "326",
                                 "s" : [ {
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "327",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "329",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "330",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "331",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
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
               "localId" : "334",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "321",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "322",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "324",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "325",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "326",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "327",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "329",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "330",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "331",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "336",
            "name" : "ListWrongCodeSystem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","ListWrongCodeSystem",": " ]
                  }, {
                     "r" : "350",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "338",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "340",
                                 "s" : [ {
                                    "value" : [ "'F'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "system",": " ]
                              }, {
                                 "r" : "341",
                                 "s" : [ {
                                    "value" : [ "'1.16.840.1.113883.18.2'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "version",": " ]
                              }, {
                                 "r" : "342",
                                 "s" : [ {
                                    "value" : [ "'HL7V2.5'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "343",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "345",
                              "s" : [ {
                                 "value" : [ "'F'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "system",": " ]
                           }, {
                              "r" : "346",
                              "s" : [ {
                                 "value" : [ "'2.16.840.1.113883.18.2'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "version",": " ]
                           }, {
                              "r" : "347",
                              "s" : [ {
                                 "value" : [ "'foo'" ]
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
               "localId" : "350",
               "type" : "IndexOf",
               "signature" : [ ],
               "source" : {
                  "localId" : "337",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "338",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "340",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "341",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "342",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "343",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "345",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "346",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "347",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         } ]
      }
   }
}

/* Indexer
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SecondItem: {'a', 'b', 'c', 'd'}[1]
define ZeroIndex: {'a', 'b', 'c', 'd'}[0]
define OutOfBounds: {'a', 'b', 'c', 'd'}[100]
define NullList: (null as List<String>)[1]
define NullIndexer: {'a', 'b', 'c', 'd'}[null]
*/

module.exports['Indexer'] = {
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
            "r" : "247",
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
            "name" : "SecondItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","SecondItem",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "216",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "217",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "218",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "219",
                        "value" : [ "[","1","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "214",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "221",
            "name" : "ZeroIndex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","ZeroIndex",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "228",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "228",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "230",
            "name" : "OutOfBounds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","OutOfBounds",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "234",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "237",
                        "value" : [ "[","100","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "237",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "100",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "239",
            "name" : "NullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","NullList",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "241",
                           "s" : [ {
                              "r" : "242",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "243",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "244",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              }, {
                                 "value" : [ ">" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "245",
                        "value" : [ "[","1","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "241",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "242",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "243",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "245",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "247",
            "name" : "NullIndexer",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","NullIndexer",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "r" : "249",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "250",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "254",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "Indexer",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "255",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "254",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* In
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIn: 4 in { 3, 4, 5 }
define IsNotIn: 4 in { 3, 5, 6 }
define TupleIsIn: Tuple{a: 1, b: 'c'} in {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}}
define TupleIsNotIn: Tuple{a: 1, b: 'c'} in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIn: null in {1, 2, null, 3}
define InNull: 1 in null
define NullNotIn: null in {1, 2, 3}
*/

module.exports['In'] = {
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
            "r" : "279",
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
            "name" : "IsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIn",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "4"," in " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "{ ","3",", ","4",", ","5"," }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "localId" : "214",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "220",
            "name" : "IsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIn",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "4"," in " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "r" : "223",
                           "value" : [ "{ ","3",", ","5",", ","6"," }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "228",
            "name" : "TupleIsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsIn",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "230",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "231",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "234",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "235",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "237",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "238",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "239",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "240",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "241",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "234",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "235",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "236",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "237",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "238",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "239",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "240",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "241",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "TupleIsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsNotIn",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "246",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "247",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " in " ]
                     }, {
                        "r" : "248",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "250",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "251",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "254",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "255",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "256",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "257",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "246",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "247",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "248",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "249",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "251",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "252",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "253",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "255",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "256",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "257",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "NullIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","NullIn",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "261",
                        "value" : [ "null"," in " ]
                     }, {
                        "r" : "262",
                        "s" : [ {
                           "r" : "263",
                           "value" : [ "{","1",", ","2",", ","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "268",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "261",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "262",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "267",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "265",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "271",
            "name" : "InNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "271",
                  "s" : [ {
                     "value" : [ "","define ","InNull",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "272",
                        "value" : [ "1"," in ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "272",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "275",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "273",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "276",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "277",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "279",
            "name" : "NullNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","NullNotIn",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "280",
                        "value" : [ "null"," in " ]
                     }, {
                        "r" : "281",
                        "s" : [ {
                           "r" : "282",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "286",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "280",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "281",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "284",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* Contains
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIn: { 3, 4, 5 } contains 4
define IsNotIn: { 3, 5, 6 } contains 4
define TupleIsIn: {Tuple{a:1, b:'d'}, Tuple{a:1, b:'c'}, Tuple{a:2, b:'c'}} contains Tuple{a: 1, b: 'c'}
define TupleIsNotIn: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} contains Tuple{a: 1, b: 'c'}
define InNull: (null as List<Integer>) contains 1
define NullIn: {1, 2, null, 3} contains null
define NullNotIn: {1, 2, 3} contains null
*/

module.exports['Contains'] = {
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
            "r" : "279",
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
            "name" : "IsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIn",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{ ","3",", ","4",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "217",
                        "value" : [ " contains ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "220",
            "name" : "IsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIn",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "{ ","3",", ","5",", ","6"," }" ]
                        } ]
                     }, {
                        "r" : "225",
                        "value" : [ " contains ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "221",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "225",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "228",
            "name" : "TupleIsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsIn",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "231",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "232",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "234",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "235",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "237",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "238",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " contains " ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "240",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "241",
                              "s" : [ {
                                 "value" : [ "'c'" ]
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
               "localId" : "242",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "230",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "231",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "232",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "233",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "234",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "235",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "236",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "237",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "238",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "239",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "241",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "TupleIsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsNotIn",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "246",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "247",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "248",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "250",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "251",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "252",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "254",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " contains " ]
                     }, {
                        "r" : "255",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "256",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "257",
                              "s" : [ {
                                 "value" : [ "'c'" ]
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
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "246",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "247",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "249",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "251",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "252",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "253",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "255",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "256",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "257",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "260",
            "name" : "InNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "260",
                  "s" : [ {
                     "value" : [ "","define ","InNull",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "r" : "262",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "263",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "264",
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
                     }, {
                        "r" : "265",
                        "value" : [ " contains ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "261",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "262",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "263",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "264",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "265",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "268",
            "name" : "NullIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "268",
                  "s" : [ {
                     "value" : [ "","define ","NullIn",": " ]
                  }, {
                     "r" : "276",
                     "s" : [ {
                        "r" : "269",
                        "s" : [ {
                           "r" : "270",
                           "value" : [ "{","1",", ","2",", ","null",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "275",
                        "value" : [ " contains ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "276",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "269",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "274",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "272",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "277",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "275",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "279",
            "name" : "NullNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","NullNotIn",": " ]
                  }, {
                     "r" : "285",
                     "s" : [ {
                        "r" : "280",
                        "s" : [ {
                           "r" : "281",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "284",
                        "value" : [ " contains ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "285",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "280",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "281",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "282",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "283",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "286",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "284",
                     "type" : "Null"
                  }
               } ]
            }
         } ]
      }
   }
}

/* Includes
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIncluded: {1, 2, 3, 4, 5} includes {2, 3, 4}
define IsIncludedReversed: {1, 2, 3, 4, 5} includes {4, 3, 2}
define IsSame: {1, 2, 3, 4, 5} includes {1, 2, 3, 4, 5}
define IsNotIncluded: {1, 2, 3, 4, 5} includes {4, 5, 6}
define TuplesIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} includes {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} includes {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}}
define NullIncluded: {1, 2, 3, 4, 5} includes null
define NullIncludes: null includes {1, 2, 3, 4, 5}
define DayIncluded: {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)} includes DateTime(2012, 3, 3)
define DayNotIncluded: {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)} includes DateTime(2014, 3, 3)
define IntegerIncluded: {1, 2, 3, 4, 5} includes 3
define IntegerNotIncluded: {1, 2, 3, 4, 5} includes 33
define QuantityInList: { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')} includes ToQuantity('1 \'m\'') 
define QuantityNotInList: { ToQuantity('100 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')} includes ToQuantity('1 \'m\'')
*/

module.exports['Includes'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 4,
         "startChar" : 45,
         "endLine" : 4,
         "endChar" : 53,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 5,
         "startChar" : 53,
         "endLine" : 5,
         "endChar" : 61,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 6,
         "startChar" : 41,
         "endLine" : 6,
         "endChar" : 55,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 7,
         "startChar" : 48,
         "endLine" : 7,
         "endChar" : 56,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 8,
         "startChar" : 91,
         "endLine" : 8,
         "endChar" : 128,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 9,
         "startChar" : 94,
         "endLine" : 9,
         "endChar" : 131,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 11,
         "startChar" : 36,
         "endLine" : 11,
         "endChar" : 50,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "461",
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
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "223",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "219",
                  "type" : "List",
                  "element" : [ {
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
                  } ]
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "238",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "234",
                        "s" : [ {
                           "r" : "235",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "234",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "r" : "250",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "243",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "267",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "260",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "266",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "274",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "277",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "280",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "281",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "283",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "284",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "292",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "285",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "287",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "288",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "291",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "275",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "276",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "277",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "279",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "280",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "282",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "283",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "284",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "285",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "286",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "287",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "288",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "289",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "290",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "296",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "299",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "300",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "302",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "303",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "305",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "306",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "314",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "309",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "310",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "312",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "313",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "298",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "299",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "300",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "301",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "302",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "303",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "304",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "305",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "306",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "307",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "308",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "309",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "310",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "311",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "312",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "313",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "319",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "326",
                        "value" : [ " ","includes"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "319",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "321",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "322",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "323",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "327",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "325",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "328",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "333",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "333",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "341",
                     "s" : [ {
                        "r" : "334",
                        "value" : [ "null"," ","includes"," " ]
                     }, {
                        "r" : "335",
                        "s" : [ {
                           "r" : "336",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "341",
               "type" : "Includes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "342",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "334",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "343",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "344",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "335",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "336",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "337",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "338",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "351",
            "name" : "DayIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "351",
                  "s" : [ {
                     "value" : [ "","define ","DayIncluded",": " ]
                  }, {
                     "r" : "379",
                     "s" : [ {
                        "r" : "352",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "358",
                           "s" : [ {
                              "r" : "353",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "364",
                           "s" : [ {
                              "r" : "359",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "r" : "365",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "379",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "376",
                        "s" : [ {
                           "r" : "371",
                           "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "379",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "352",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "358",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "353",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "354",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "355",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "364",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "359",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "360",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "361",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "370",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "365",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "366",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "367",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "376",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "371",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "372",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "373",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "381",
            "name" : "DayNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "381",
                  "s" : [ {
                     "value" : [ "","define ","DayNotIncluded",": " ]
                  }, {
                     "r" : "409",
                     "s" : [ {
                        "r" : "382",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "388",
                           "s" : [ {
                              "r" : "383",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "r" : "389",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "r" : "395",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "409",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "406",
                        "s" : [ {
                           "r" : "401",
                           "value" : [ "DateTime","(","2014",", ","3",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "409",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "382",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "388",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "383",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "384",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "385",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "394",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "389",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "390",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "391",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "400",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "395",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "396",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "397",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "406",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "401",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "402",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "403",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "411",
            "name" : "IntegerIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "411",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIncluded",": " ]
                  }, {
                     "r" : "421",
                     "s" : [ {
                        "r" : "412",
                        "s" : [ {
                           "r" : "413",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "421",
                        "value" : [ " ","includes"," ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "421",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "412",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "413",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "415",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "416",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "417",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "418",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "423",
            "name" : "IntegerNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "423",
                  "s" : [ {
                     "value" : [ "","define ","IntegerNotIncluded",": " ]
                  }, {
                     "r" : "433",
                     "s" : [ {
                        "r" : "424",
                        "s" : [ {
                           "r" : "425",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "433",
                        "value" : [ " ","includes"," ","33" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "433",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "424",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "425",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "426",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "427",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "428",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "429",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "430",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "33",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "435",
            "name" : "QuantityInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "435",
                  "s" : [ {
                     "value" : [ "","define ","QuantityInList",": " ]
                  }, {
                     "r" : "459",
                     "s" : [ {
                        "r" : "436",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "440",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "437",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "444",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "441",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "448",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "445",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "452",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "449",
                              "s" : [ {
                                 "value" : [ "'3 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "459",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "456",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "453",
                           "s" : [ {
                              "value" : [ "'1 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "459",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "436",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "440",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "437",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "444",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "441",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "448",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "445",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "452",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "449",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "456",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "453",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1 'm'",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "461",
            "name" : "QuantityNotInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "461",
                  "s" : [ {
                     "value" : [ "","define ","QuantityNotInList",": " ]
                  }, {
                     "r" : "485",
                     "s" : [ {
                        "r" : "462",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "466",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "463",
                              "s" : [ {
                                 "value" : [ "'100 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "470",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "467",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "474",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "471",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "478",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "475",
                              "s" : [ {
                                 "value" : [ "'3 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "485",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "482",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "479",
                           "s" : [ {
                              "value" : [ "'1 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "485",
               "type" : "Contains",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "462",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "466",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "463",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "100 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "470",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "467",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "474",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "471",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "478",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "475",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "482",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "479",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1 'm'",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      }
   }
}

/* IncludedIn
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIncluded: {2, 3, 4} included in {1, 2, 3, 4, 5}
define IsIncludedReversed: {4, 3, 2} included in {1, 2, 3, 4, 5}
define IsSame: {1, 2, 3, 4, 5} included in {1, 2, 3, 4, 5}
define IsNotIncluded: {4, 5, 6} included in {1, 2, 3, 4, 5}
define TuplesIncluded: {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}} included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIncludes: {1, 2, 3, 4, 5} included in null
define NullIncluded: null included in {1, 2, 3, 4, 5}
define DayIncluded: DateTime(2012, 3, 3) included in {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)}
define DayNotIncluded: DateTime(2014, 3, 3) included in {DateTime(2012, 3, 2), DateTime(2012, 3, 3), DateTime(2012, 3, 4)}
define IntegerIncluded: 3 included in {1, 2, 3, 4, 5}
define IntegerNotIncluded: 33 included in {1, 2, 3, 4, 5}
define QuantityInList: ToQuantity('1 \'m\'') included in { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')}
define QuantityNotInList: ToQuantity('100 \'m\'') included in { ToQuantity('1 \'m\''), ToQuantity('1.995 \'m\''), ToQuantity('2 \'m\''), ToQuantity('3 \'m\'')}
*/

module.exports['IncludedIn'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 4,
         "startChar" : 20,
         "endLine" : 4,
         "endChar" : 28,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 5,
         "startChar" : 28,
         "endLine" : 5,
         "endChar" : 36,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 6,
         "startChar" : 16,
         "endLine" : 6,
         "endChar" : 30,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 7,
         "startChar" : 23,
         "endLine" : 7,
         "endChar" : 31,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 8,
         "startChar" : 24,
         "endLine" : 8,
         "endChar" : 61,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 9,
         "startChar" : 27,
         "endLine" : 9,
         "endChar" : 64,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "461",
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
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "r" : "223",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "218",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "217",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     }, {
                        "r" : "238",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "r" : "250",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "243",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "r" : "265",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "260",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "264",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "274",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "277",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "280",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "281",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "292",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "284",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "285",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "287",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "288",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "291",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "275",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "276",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "277",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "279",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "280",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "282",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "283",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "284",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "285",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "286",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "287",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "288",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "289",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "290",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "296",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "299",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "300",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "302",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "303",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "314",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "306",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "307",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "309",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "310",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "312",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "313",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "298",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "299",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "300",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "301",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "302",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "303",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "304",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "305",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "306",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "307",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "308",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "309",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "310",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "311",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "312",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "313",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "319",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "326",
                        "value" : [ " ","included in"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "319",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "321",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "322",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "323",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "327",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "325",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "328",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "336",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "r" : "337",
                        "value" : [ "null"," ","included in"," " ]
                     }, {
                        "r" : "338",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "344",
               "type" : "IncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "345",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "337",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "346",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "347",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "338",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "342",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "343",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "351",
            "name" : "DayIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "351",
                  "s" : [ {
                     "value" : [ "","define ","DayIncluded",": " ]
                  }, {
                     "r" : "379",
                     "s" : [ {
                        "r" : "357",
                        "s" : [ {
                           "r" : "352",
                           "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                        } ]
                     }, {
                        "r" : "379",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "358",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "364",
                           "s" : [ {
                              "r" : "359",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "370",
                           "s" : [ {
                              "r" : "365",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "376",
                           "s" : [ {
                              "r" : "371",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "379",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "357",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "352",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "353",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "354",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "358",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "364",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "359",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "360",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "361",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "370",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "365",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "366",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "367",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "376",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "371",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "372",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "373",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "381",
            "name" : "DayNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "381",
                  "s" : [ {
                     "value" : [ "","define ","DayNotIncluded",": " ]
                  }, {
                     "r" : "409",
                     "s" : [ {
                        "r" : "387",
                        "s" : [ {
                           "r" : "382",
                           "value" : [ "DateTime","(","2014",", ","3",", ","3",")" ]
                        } ]
                     }, {
                        "r" : "409",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "388",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "394",
                           "s" : [ {
                              "r" : "389",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "400",
                           "s" : [ {
                              "r" : "395",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "406",
                           "s" : [ {
                              "r" : "401",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "409",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "387",
                  "type" : "DateTime",
                  "signature" : [ ],
                  "year" : {
                     "localId" : "382",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "383",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "384",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "388",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "394",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "389",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "390",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "391",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "400",
                     "type" : "DateTime",
                     "signature" : [ ],
                     "year" : {
                        "localId" : "395",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "396",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "397",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "406",
                     "type" : "DateTime",
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
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "403",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "411",
            "name" : "IntegerIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "411",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIncluded",": " ]
                  }, {
                     "r" : "421",
                     "s" : [ {
                        "r" : "412",
                        "value" : [ "3"," ","included in"," " ]
                     }, {
                        "r" : "413",
                        "s" : [ {
                           "r" : "414",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "421",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "412",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "413",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "414",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "415",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "416",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "417",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "418",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "423",
            "name" : "IntegerNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "423",
                  "s" : [ {
                     "value" : [ "","define ","IntegerNotIncluded",": " ]
                  }, {
                     "r" : "433",
                     "s" : [ {
                        "r" : "424",
                        "value" : [ "33"," ","included in"," " ]
                     }, {
                        "r" : "425",
                        "s" : [ {
                           "r" : "426",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "433",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "424",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "33",
                  "type" : "Literal"
               }, {
                  "localId" : "425",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "426",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "427",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "428",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "429",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "430",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "435",
            "name" : "QuantityInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "435",
                  "s" : [ {
                     "value" : [ "","define ","QuantityInList",": " ]
                  }, {
                     "r" : "459",
                     "s" : [ {
                        "r" : "439",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "436",
                           "s" : [ {
                              "value" : [ "'1 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "459",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "440",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "444",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "441",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "448",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "445",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "452",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "449",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "456",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "453",
                              "s" : [ {
                                 "value" : [ "'3 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "459",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "439",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "436",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1 'm'",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "440",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "444",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "441",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "448",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "445",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "452",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "449",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "456",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "453",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "461",
            "name" : "QuantityNotInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "461",
                  "s" : [ {
                     "value" : [ "","define ","QuantityNotInList",": " ]
                  }, {
                     "r" : "485",
                     "s" : [ {
                        "r" : "465",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "462",
                           "s" : [ {
                              "value" : [ "'100 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "485",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "466",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "470",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "467",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "474",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "471",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "478",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "475",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "482",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "479",
                              "s" : [ {
                                 "value" : [ "'3 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "485",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "465",
                  "type" : "ToQuantity",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "462",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "100 'm'",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "466",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "470",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "467",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "474",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "471",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "478",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "475",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "482",
                     "type" : "ToQuantity",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "479",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* ProperIncludes
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIncluded: {1, 2, 3, 4, 5} properly includes {2, 3, 4, 5}
define IsIncludedReversed: {1, 2, 3, 4, 5} properly includes {5, 4, 3, 2}
define IsSame: {1, 2, 3, 4, 5} properly includes {1, 2, 3, 4, 5}
define IsNotIncluded: {1, 2, 3, 4, 5} properly includes {3, 4, 5, 6}
define TuplesIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly includes {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly includes {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}}
define NullIncluded: {1, 2, 3, 4, 5} properly includes null
define NullIncludes: null properly includes {1, 2, 3, 4, 5}
*/

module.exports['ProperIncludes'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 4,
         "startChar" : 54,
         "endLine" : 4,
         "endChar" : 65,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 5,
         "startChar" : 62,
         "endLine" : 5,
         "endChar" : 73,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 6,
         "startChar" : 50,
         "endLine" : 6,
         "endChar" : 64,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 7,
         "startChar" : 57,
         "endLine" : 7,
         "endChar" : 68,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 8,
         "startChar" : 100,
         "endLine" : 8,
         "endChar" : 137,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 9,
         "startChar" : 103,
         "endLine" : 9,
         "endChar" : 140,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 11,
         "startChar" : 45,
         "endLine" : 11,
         "endChar" : 59,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "336",
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
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "224",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "219",
                        "s" : [ {
                           "r" : "220",
                           "value" : [ "{","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "219",
                  "type" : "List",
                  "element" : [ {
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
            }
         }, {
            "localId" : "228",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "r" : "229",
                        "s" : [ {
                           "r" : "230",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "235",
                        "s" : [ {
                           "r" : "236",
                           "value" : [ "{","5",", ","4",", ","3",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "240",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "229",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "235",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "244",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "245",
                        "s" : [ {
                           "r" : "246",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "257",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "251",
                        "s" : [ {
                           "r" : "252",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "245",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
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
            }
         }, {
            "localId" : "261",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "273",
                     "s" : [ {
                        "r" : "262",
                        "s" : [ {
                           "r" : "263",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "273",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "{","3",", ","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "273",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "262",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "268",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "270",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "277",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "295",
                     "s" : [ {
                        "r" : "278",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "280",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "281",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "282",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "283",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "284",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "285",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "286",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "287",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "295",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "291",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "292",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "293",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "294",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "295",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "278",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "279",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "280",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "282",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "283",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "284",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "285",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "286",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "287",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "288",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "289",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "290",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "292",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "293",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "294",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "299",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "300",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "302",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "303",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "304",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "305",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "306",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "307",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "308",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "309",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "317",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "310",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "312",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "313",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "314",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "315",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "316",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "317",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "300",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "301",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "302",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "303",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "304",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "305",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "306",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "307",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "308",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "309",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "310",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "311",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "312",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "313",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "314",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "315",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "316",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "321",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "321",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "329",
                     "s" : [ {
                        "r" : "322",
                        "s" : [ {
                           "r" : "323",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "329",
                        "value" : [ " ","properly includes"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "329",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "322",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "323",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "325",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "326",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "327",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "330",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "328",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "331",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "332",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "336",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "344",
                     "s" : [ {
                        "r" : "337",
                        "value" : [ "null"," ","properly includes"," " ]
                     }, {
                        "r" : "338",
                        "s" : [ {
                           "r" : "339",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "344",
               "type" : "ProperIncludes",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "345",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "337",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "346",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "347",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "338",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "339",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "340",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "341",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "342",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "343",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* ProperIncludedIn
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define IsIncluded: {2, 3, 4} properly included in {1, 2, 3, 4, 5}
define IsIncludedReversed: {4, 3, 2} properly included in {1, 2, 3, 4, 5}
define IsSame: {1, 2, 3, 4, 5} properly included in {1, 2, 3, 4, 5}
define IsNotIncluded: {4, 5, 6} properly included in {1, 2, 3, 4, 5}
define TuplesIncluded: {Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}} properly included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define TuplesNotIncluded: {Tuple{a:2, b:'d'}, Tuple{a:3, b:'c'}} properly included in {Tuple{a:1, b:'d'}, Tuple{a:2, b:'d'}, Tuple{a:2, b:'c'}}
define NullIncludes: {1, 2, 3, 4, 5} properly included in null
define NullIncluded: (null as List<Integer>) properly included in {1, 2, 3, 4, 5}
*/

module.exports['ProperIncludedIn'] = {
   "library" : {
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 4,
         "startChar" : 20,
         "endLine" : 4,
         "endChar" : 28,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 5,
         "startChar" : 28,
         "endLine" : 5,
         "endChar" : 36,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 6,
         "startChar" : 16,
         "endLine" : 6,
         "endChar" : 30,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 7,
         "startChar" : 23,
         "endLine" : 7,
         "endChar" : 31,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 8,
         "startChar" : 24,
         "endLine" : 8,
         "endChar" : 61,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 9,
         "startChar" : 27,
         "endLine" : 9,
         "endChar" : 64,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "libraryId" : "TestSnippet",
         "libraryVersion" : "1",
         "startLine" : 11,
         "startChar" : 23,
         "endLine" : 11,
         "endChar" : 43,
         "message" : "List-valued expression was demoted to a singleton.",
         "errorType" : "semantic",
         "errorSeverity" : "warning",
         "type" : "CqlToElmError"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "336",
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
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "r" : "223",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "r" : "218",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "217",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "227",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "238",
                     "s" : [ {
                        "r" : "228",
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     }, {
                        "r" : "238",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "r" : "233",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "238",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "228",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "234",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "237",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "242",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "255",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "249",
                        "s" : [ {
                           "r" : "250",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "255",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "243",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "245",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "246",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "248",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "249",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "253",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "254",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "259",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "r" : "270",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "264",
                        "s" : [ {
                           "r" : "265",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "260",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "264",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "266",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "267",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "274",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "274",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "292",
                     "s" : [ {
                        "r" : "275",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "276",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "277",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "278",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "279",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "280",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "281",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "292",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "282",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "283",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "284",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "285",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "286",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "287",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "288",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "289",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "290",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "291",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "275",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "276",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "277",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "278",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "279",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "280",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "281",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "282",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "283",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "284",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "285",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "286",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "287",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "288",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "289",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "290",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "291",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "296",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "296",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "r" : "297",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "298",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "299",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "300",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "301",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "302",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "303",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "314",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "304",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "305",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "306",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "307",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "308",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "309",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "310",
                                 "s" : [ {
                                    "value" : [ "'d'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "311",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "312",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "313",
                                 "s" : [ {
                                    "value" : [ "'c'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "314",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "297",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "298",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "299",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "300",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "301",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "302",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "303",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "304",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "305",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "306",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "307",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "308",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "309",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "310",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "311",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "312",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "313",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "318",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "r" : "319",
                        "s" : [ {
                           "r" : "320",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "326",
                        "value" : [ " ","properly included in"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "326",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "319",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "320",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "321",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "322",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "323",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "324",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "327",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "325",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "328",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "329",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "336",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "336",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "347",
                     "s" : [ {
                        "r" : "337",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "337",
                           "s" : [ {
                              "r" : "338",
                              "value" : [ "null"," as " ]
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
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "347",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "341",
                        "s" : [ {
                           "r" : "342",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "347",
               "type" : "ProperIncludedIn",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "337",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "338",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "339",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "340",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "341",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "342",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "343",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "344",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "345",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "346",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         } ]
      }
   }
}

/* Flatten
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ListOfLists: flatten { {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {9, 8, 7, 6, 5}, {4}, {3, 2, 1} }
define NullValue: flatten null
*/

module.exports['Flatten'] = {
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
            "r" : "240",
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
            "name" : "ListOfLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","ListOfLists",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "flatten " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "215",
                           "s" : [ {
                              "r" : "216",
                              "value" : [ "{","1",", ","2",", ","3","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "219",
                           "s" : [ {
                              "r" : "220",
                              "value" : [ "{","4",", ","5",", ","6","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "r" : "224",
                              "value" : [ "{","7",", ","8",", ","9","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "r" : "228",
                              "value" : [ "{","9",", ","8",", ","7",", ","6",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "value" : [ "{","4","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "r" : "236",
                              "value" : [ "{","3",", ","2",", ","1","}" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Flatten",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "215",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "216",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "217",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "218",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "219",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "220",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "221",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "222",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "223",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "224",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "225",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "227",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "228",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     }, {
                        "localId" : "229",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "233",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "235",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "237",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "240",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "240",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "242",
                        "value" : [ "flatten ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Flatten",
               "signature" : [ ],
               "operand" : {
                  "localId" : "243",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "242",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "244",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "245",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "246",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }
               }
            }
         } ]
      }
   }
}

/* Distinct
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define LotsOfDups: distinct {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 3, 2, 1}
define NoDups: distinct {2, 4, 6, 8, 10}
define DupsTuples: distinct { Tuple{ hello: 'world' }, Tuple{ hello: 'cleveland' }, Tuple{ hello: 'world' }, Tuple{ hello: 'dolly' } }
define NoDupsTuples: distinct { Tuple{ hello: 'world' }, Tuple{ hello: 'cleveland' } }
define DuplicateNulls: distinct {null, 1, 2, null, 3, 4, 5, null}
*/

module.exports['Distinct'] = {
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
            "r" : "264",
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
            "name" : "LotsOfDups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","LotsOfDups",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "214",
                        "s" : [ {
                           "r" : "215",
                           "value" : [ "{","1",", ","2",", ","2",", ","3",", ","3",", ","3",", ","4",", ","4",", ","4",", ","4",", ","5",", ","5",", ","5",", ","5",", ","5",", ","4",", ","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Distinct",
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
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "219",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "221",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "231",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "232",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "233",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "235",
            "name" : "NoDups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","NoDups",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "237",
                        "s" : [ {
                           "r" : "238",
                           "value" : [ "{","2",", ","4",", ","6",", ","8",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "type" : "Distinct",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "238",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "239",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "244",
            "name" : "DupsTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","DupsTuples",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "248",
                                 "s" : [ {
                                    "value" : [ "'world'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "249",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "250",
                                 "s" : [ {
                                    "value" : [ "'cleveland'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "252",
                                 "s" : [ {
                                    "value" : [ "'world'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "253",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "254",
                                 "s" : [ {
                                    "value" : [ "'dolly'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "type" : "Distinct",
               "signature" : [ ],
               "operand" : {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "249",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "cleveland",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "251",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "252",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "253",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "dolly",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "256",
            "name" : "NoDupsTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","NoDupsTuples",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "259",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "260",
                                 "s" : [ {
                                    "value" : [ "'world'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "261",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "262",
                                 "s" : [ {
                                    "value" : [ "'cleveland'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        }, {
                           "value" : [ " }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "type" : "Distinct",
               "signature" : [ ],
               "operand" : {
                  "localId" : "258",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "259",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "260",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "261",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "262",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "cleveland",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "264",
            "name" : "DuplicateNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "264",
                  "s" : [ {
                     "value" : [ "","define ","DuplicateNulls",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "266",
                        "s" : [ {
                           "r" : "267",
                           "value" : [ "{","null",", ","1",", ","2",", ","null",", ","3",", ","4",", ","5",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "type" : "Distinct",
               "signature" : [ ],
               "operand" : {
                  "localId" : "266",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "275",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "267",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "268",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "269",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "276",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "270",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "271",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "272",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "273",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "277",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "274",
                        "type" : "Null"
                     }
                  } ]
               }
            }
         } ]
      }
   }
}

/* First
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Numbers: First({1, 2, 3, 4})
define Letters: First({'a', 'b', 'c'})
define Lists: First({{'a','b','c'},{'d','e','f'}})
define Tuples: First({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Unordered: First({3, 1, 4, 2})
define Empty: First(List<Integer>{})
define NullValue: First(null as List<Integer>)
*/

module.exports['First'] = {
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
            "r" : "277",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "222",
            "name" : "Letters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Letters",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'c'" ]
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
               "localId" : "229",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "223",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "'e'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "240",
                              "s" : [ {
                                 "value" : [ "'f'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "localId" : "243",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "235",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "237",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     }, {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "e",
                        "type" : "Literal"
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "f",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "245",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "248",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "249",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "250",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "252",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "254",
                                 "value" : [ "c",": ","26" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "localId" : "257",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "251",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "252",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "253",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "259",
            "name" : "Unordered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","Unordered",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "{","3",", ","1",", ","4",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "260",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "269",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "270",
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
               "localId" : "275",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "271",
                  "type" : "List",
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "277",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "null"," as " ]
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
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "type" : "First",
               "signature" : [ ],
               "source" : {
                  "localId" : "278",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "279",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "280",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "281",
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

/* Last
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Numbers: Last({1, 2, 3, 4})
define Letters: Last({'a', 'b', 'c'})
define Lists: Last({{'a','b','c'},{'d','e','f'}})
define Tuples: Last({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Unordered: Last({3, 1, 4, 2})
define Empty: Last(List<Integer>{})
define NullValue: Last(null as List<Integer>)
*/

module.exports['Last'] = {
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
            "r" : "277",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "222",
            "name" : "Letters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Letters",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "224",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'c'" ]
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
               "localId" : "229",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "223",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "231",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "232",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "236",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "'e'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "240",
                              "s" : [ {
                                 "value" : [ "'f'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "localId" : "243",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "232",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "233",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "235",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "237",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     }, {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "e",
                        "type" : "Literal"
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "f",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "245",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "248",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "249",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "250",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "252",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "254",
                                 "value" : [ "c",": ","26" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "localId" : "257",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "251",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "252",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "253",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "259",
            "name" : "Unordered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","Unordered",": " ]
                  }, {
                     "r" : "267",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "260",
                        "s" : [ {
                           "r" : "261",
                           "value" : [ "{","3",", ","1",", ","4",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "267",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "260",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "261",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "262",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "263",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "264",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "269",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "269",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "275",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "270",
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
               "localId" : "275",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "271",
                  "type" : "List",
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "277",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "277",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "284",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "278",
                        "s" : [ {
                           "r" : "279",
                           "value" : [ "null"," as " ]
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
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "284",
               "type" : "Last",
               "signature" : [ ],
               "source" : {
                  "localId" : "278",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "279",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "280",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "281",
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

/* Length
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Numbers: Length({2, 4, 6, 8, 10})
define Lists: Length({ {1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}})
define Tuples: Length({ Tuple{a: 1, b: 2, c: 3}, Tuple{a: 24, b: 25, c: 26} })
define Empty: Length(List<Integer>{})
define NullValue: Length(null as List<Integer>)
*/

module.exports['Length'] = {
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
            "r" : "267",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{","2",", ","4",", ","6",", ","8",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "223",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "r" : "226",
                              "value" : [ "{","1",", ","2",", ","3","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "r" : "230",
                              "value" : [ "{","4",", ","5",", ","6","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "r" : "234",
                              "value" : [ "{","7",", ","8",", ","9","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "r" : "238",
                              "value" : [ "{","10",", ","11",", ","12","}" ]
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
               "localId" : "243",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "224",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "225",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "226",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "227",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "228",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "229",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "230",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "231",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "232",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "233",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "234",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "235",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "236",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "237",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "238",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }, {
                        "localId" : "239",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "11",
                        "type" : "Literal"
                     }, {
                        "localId" : "240",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "245",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "245",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "246",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "248",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "249",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "250",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "251",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "252",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "253",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "254",
                                 "value" : [ "c",": ","26" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
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
               "localId" : "257",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "246",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "247",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "248",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "249",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "250",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "251",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "252",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "253",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "254",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "259",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "259",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "261",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "260",
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
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "261",
                  "type" : "List",
                  "element" : [ ]
               }
            }
         }, {
            "localId" : "267",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "268",
                        "s" : [ {
                           "r" : "269",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "270",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "271",
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
               "localId" : "274",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "268",
                  "strict" : false,
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "269",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "270",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "271",
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

/* ToList
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define FiveInFive: 5 in 5 // CQL-to-ELM will promote the second 5 to a list via ToList
define FourInFive: 4 in 5 // CQL-to-ELM will promote the 5 to a list via ToList
define LengthOfNull: Length(null as Integer) // CQL-to-ELM will promote the null to a list via ToList
*/

module.exports['ToList'] = {
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
            "name" : "FiveInFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","FiveInFive",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "5"," in ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "218",
            "name" : "FourInFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "// CQL-to-ELM will promote the second 5 to a list via ToList\n","define ","FourInFive",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "4"," in ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "In",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "220",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "224",
            "name" : "LengthOfNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "// CQL-to-ELM will promote the 5 to a list via ToList\n","define ","LengthOfNull",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "225",
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
               "type" : "Length",
               "signature" : [ ],
               "operand" : {
                  "localId" : "232",
                  "type" : "ToList",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "strict" : false,
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "226",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "227",
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

/* Skip
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Skip2: Skip({ 1, 2, 3, 4, 5 }, 2)
define SkipNull: Skip({ 1, 3, 5 }, null)
define SkipEmpty: Skip({ 1, 3, 5 }, -1)
define SkipIsNull: Skip(null, 2)
*/

module.exports['Skip'] = {
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
            "r" : "250",
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
            "name" : "Skip2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Skip2",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "219",
                        "value" : [ ", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "219",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "223",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "225",
            "name" : "SkipNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","SkipNull",": " ]
                  }, {
                     "r" : "234",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "r" : "227",
                           "value" : [ "{ ","1",", ","3",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "230",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "234",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "226",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "227",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "236",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "230",
                     "type" : "Null"
                  }
               },
               "endIndex" : {
                  "localId" : "235",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "238",
            "name" : "SkipEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","SkipEmpty",": " ]
                  }, {
                     "r" : "247",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "{ ","1",", ","3",", ","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "243",
                        "s" : [ {
                           "r" : "244",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "247",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "239",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "243",
                  "type" : "Negate",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "244",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "endIndex" : {
                  "localId" : "248",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "250",
            "name" : "SkipIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","SkipIsNull",": " ]
                  }, {
                     "r" : "258",
                     "s" : [ {
                        "r" : "251",
                        "value" : [ "Skip","(","null",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "258",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "260",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "261",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "262",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "startIndex" : {
                  "localId" : "252",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "259",
                  "type" : "Null"
               }
            }
         } ]
      }
   }
}

/* Tail
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Tail234: Tail({ 1, 2, 3, 4 })
define TailEmpty: Tail({ })
define TailIsNull: Tail(null)
*/

module.exports['Tail'] = {
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
            "name" : "Tail234",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Tail234",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "Tail","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "221",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "222",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "224",
            "name" : "TailEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","TailEmpty",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "225",
                        "value" : [ "Tail","(","{ }",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "225",
                  "type" : "List",
                  "element" : [ ]
               },
               "startIndex" : {
                  "localId" : "229",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "230",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "232",
            "name" : "TailIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","TailIsNull",": " ]
                  }, {
                     "r" : "239",
                     "s" : [ {
                        "r" : "233",
                        "value" : [ "Tail","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "239",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "242",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "233",
                     "type" : "Null"
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
               },
               "startIndex" : {
                  "localId" : "240",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "241",
                  "type" : "Null"
               }
            }
         } ]
      }
   }
}

/* Take
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Take2: Take({ 1, 2, 3, 4 }, 2)
define TakeTooMany: Take({ 1, 2 }, 3)
define TakeEmpty: Take({ 1, 2, 3, 4 }, null)
define TakeIsNull: Take(null, 2)
*/

module.exports['Take'] = {
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
            "r" : "254",
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
            "name" : "Take2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","Take2",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "r" : "214",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "r" : "218",
                        "value" : [ ", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "213",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "214",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "215",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "216",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "217",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "222",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "223",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "218",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "224",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "226",
            "name" : "TakeTooMany",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","TakeTooMany",": " ]
                  }, {
                     "r" : "233",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "r" : "228",
                           "value" : [ "{ ","1",", ","2"," }" ]
                        } ]
                     }, {
                        "r" : "230",
                        "value" : [ ", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "233",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "227",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "228",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "229",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "234",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "235",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "230",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "236",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "238",
            "name" : "TakeEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "238",
                  "s" : [ {
                     "value" : [ "","define ","TakeEmpty",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "239",
                        "s" : [ {
                           "r" : "240",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "r" : "244",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "248",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "239",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "241",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "242",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "243",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "249",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "250",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "252",
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "244",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "251",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "254",
            "name" : "TakeIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "254",
                  "s" : [ {
                     "value" : [ "","define ","TakeIsNull",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "255",
                        "value" : [ "Take","(","null",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "type" : "Slice",
               "signature" : [ ],
               "source" : {
                  "localId" : "266",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "255",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "267",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "268",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "startIndex" : {
                  "localId" : "263",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "localId" : "264",
                  "type" : "Coalesce",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "256",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "265",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         } ]
      }
   }
}

