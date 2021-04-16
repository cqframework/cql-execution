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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "24",
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
            "name" : "Three",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","Three",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "1"," + ","2" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "Add",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "3",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "10",
            "name" : "IntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","IntList",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "{ ","9",", ","7",", ","8"," }" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "List",
               "element" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "9",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "7",
                  "type" : "Literal"
               }, {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "8",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "15",
            "name" : "StringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","StringList",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "'bee'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "13",
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
               "localId" : "14",
               "type" : "List",
               "element" : [ {
                  "localId" : "11",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }, {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "bee",
                  "type" : "Literal"
               }, {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "see",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "21",
            "name" : "MixedList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "21",
                  "s" : [ {
                     "value" : [ "","define ","MixedList",": " ]
                  }, {
                     "r" : "20",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "Any" ]
                        } ]
                     }, {
                        "r" : "17",
                        "value" : [ ">{ ","1",", " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "'two'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "19",
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
               "localId" : "20",
               "type" : "List",
               "element" : [ {
                  "localId" : "17",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "localId" : "18",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "two",
                  "type" : "Literal"
               }, {
                  "localId" : "19",
                  "name" : "Three",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "24",
            "name" : "EmptyList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","EmptyList",": " ]
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
                        "value" : [ ">{}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "List"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "35",
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
            "name" : "EmptyList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","EmptyList",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "2",
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
               "localId" : "4",
               "type" : "Exists",
               "operand" : {
                  "localId" : "3",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "11",
            "name" : "FullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","FullList",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "r" : "6",
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
               "localId" : "10",
               "type" : "Exists",
               "operand" : {
                  "localId" : "9",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "15",
            "name" : "ListWithOneNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","ListWithOneNull",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "r" : "12",
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
               "localId" : "14",
               "type" : "Exists",
               "operand" : {
                  "localId" : "13",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "12",
                     "type" : "Null"
                  } ]
               }
            }
         }, {
            "localId" : "20",
            "name" : "ListWithTwoNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","ListWithTwoNulls",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "r" : "16",
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
               "localId" : "19",
               "type" : "Exists",
               "operand" : {
                  "localId" : "18",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "16",
                     "type" : "Null"
                  }, {
                     "localId" : "17",
                     "type" : "Null"
                  } ]
               }
            }
         }, {
            "localId" : "26",
            "name" : "ListStartingWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","ListStartingWithNull",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "r" : "21",
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
               "localId" : "25",
               "type" : "Exists",
               "operand" : {
                  "localId" : "24",
                  "type" : "List",
                  "element" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "21",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "32",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "30",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "30",
                           "s" : [ {
                              "r" : "27",
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
               "localId" : "31",
               "type" : "Exists",
               "operand" : {
                  "localId" : "30",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "35",
            "name" : "NullExists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "35",
                  "s" : [ {
                     "value" : [ "","define ","NullExists",": " ]
                  }, {
                     "r" : "34",
                     "s" : [ {
                        "value" : [ "exists " ]
                     }, {
                        "r" : "33",
                        "s" : [ {
                           "r" : "33",
                           "value" : [ "(","null",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "34",
               "type" : "Exists",
               "operand" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "33",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "121",
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
            "name" : "EqualIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","EqualIntList",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "5",
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
                  } ]
               }, {
                  "localId" : "9",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "20",
            "name" : "UnequalIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","UnequalIntList",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "15",
                        "s" : [ {
                           "r" : "12",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "18",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "30",
            "name" : "ReverseIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","ReverseIntList",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "24",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "r" : "25",
                           "value" : [ "{","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "29",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "24",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "28",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "38",
            "name" : "EqualStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","EqualStringList",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "31",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
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
               "localId" : "37",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "33",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "36",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "46",
            "name" : "UnequalStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","UnequalStringList",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "'foo'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "43",
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
               "localId" : "45",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "39",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "44",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "foo",
                     "type" : "Literal"
                  }, {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "bar",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "66",
            "name" : "EqualTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "","define ","EqualTupleList",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "51",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "48",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "50",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "49",
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
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "52",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "53",
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
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "57",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "59",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "58",
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
                           "r" : "63",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "61",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "62",
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
               "localId" : "65",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "55",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "51",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "48",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "50",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "49",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "54",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "64",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "60",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "57",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "59",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "58",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "63",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "61",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "87",
            "name" : "UnequalTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "87",
                  "s" : [ {
                     "value" : [ "","define ","UnequalTupleList",": " ]
                  }, {
                     "r" : "86",
                     "s" : [ {
                        "r" : "75",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "71",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "68",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "70",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "69",
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
                           "r" : "74",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "72",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "73",
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
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "81",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "77",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "80",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "c",": " ]
                                    }, {
                                       "r" : "79",
                                       "s" : [ {
                                          "r" : "78",
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
                           "r" : "84",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "82",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "83",
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
               "localId" : "86",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "75",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "71",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "68",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "70",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "69",
                                 "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                 "value" : "1",
                                 "type" : "Literal"
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "74",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "73",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "85",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "81",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "77",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "80",
                           "type" : "Tuple",
                           "element" : [ {
                              "name" : "c",
                              "value" : {
                                 "localId" : "79",
                                 "type" : "Negate",
                                 "operand" : {
                                    "localId" : "78",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              }
                           } ]
                        }
                     } ]
                  }, {
                     "localId" : "84",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "x",
                        "value" : {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "y",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "z",
                        "value" : {
                           "localId" : "83",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "98",
            "name" : "FirstListHasNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "98",
                  "s" : [ {
                     "value" : [ "","define ","FirstListHasNull",": " ]
                  }, {
                     "r" : "97",
                     "s" : [ {
                        "r" : "93",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "88",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "89",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "92",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "92",
                              "s" : [ {
                                 "r" : "90",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "91",
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
                        "r" : "96",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "94",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "95",
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
               "localId" : "97",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "93",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "88",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "89",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  }, {
                     "localId" : "92",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "90",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "91",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "96",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "94",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "95",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "109",
            "name" : "SecondListHasNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "109",
                  "s" : [ {
                     "value" : [ "","define ","SecondListHasNull",": " ]
                  }, {
                     "r" : "108",
                     "s" : [ {
                        "r" : "101",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "99",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","="," " ]
                     }, {
                        "r" : "107",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "103",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "106",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "106",
                              "s" : [ {
                                 "r" : "104",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "105",
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
               "localId" : "108",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "101",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "99",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "100",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "107",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "102",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "hello",
                     "type" : "Literal"
                  }, {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "world",
                     "type" : "Literal"
                  }, {
                     "localId" : "106",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "104",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "105",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "121",
            "name" : "BothListsHaveNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "121",
                  "s" : [ {
                     "value" : [ "","define ","BothListsHaveNull",": " ]
                  }, {
                     "r" : "120",
                     "s" : [ {
                        "r" : "114",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "110",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{" ]
                        }, {
                           "r" : "113",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "113",
                              "s" : [ {
                                 "r" : "111",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "112",
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
                        "r" : "119",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "115",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{" ]
                        }, {
                           "r" : "118",
                           "s" : [ {
                              "value" : [ "(" ]
                           }, {
                              "r" : "118",
                              "s" : [ {
                                 "r" : "116",
                                 "value" : [ "null"," as " ]
                              }, {
                                 "r" : "117",
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
               "localId" : "120",
               "type" : "Equal",
               "operand" : [ {
                  "localId" : "114",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "113",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "111",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "112",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }, {
                  "localId" : "119",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "118",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "116",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "117",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "87",
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
            "name" : "EqualIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","EqualIntList",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "5",
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
                     } ]
                  }, {
                     "localId" : "9",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "7",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "8",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "20",
            "name" : "UnequalIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","UnequalIntList",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "r" : "15",
                        "s" : [ {
                           "r" : "12",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "18",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "19",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "15",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "12",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "13",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "14",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "18",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "30",
            "name" : "ReverseIntList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","ReverseIntList",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "24",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "r" : "25",
                           "value" : [ "{","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "29",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "24",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "21",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "22",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "23",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "28",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "25",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "38",
            "name" : "EqualStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","EqualStringList",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "31",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "36",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
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
               "localId" : "37",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "33",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "31",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "32",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "36",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "34",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "35",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "46",
            "name" : "UnequalStringList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "46",
                  "s" : [ {
                     "value" : [ "","define ","UnequalStringList",": " ]
                  }, {
                     "r" : "45",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "'hello'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "40",
                           "s" : [ {
                              "value" : [ "'world'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ " ","!="," " ]
                     }, {
                        "r" : "44",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "'foo'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "43",
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
               "localId" : "45",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "41",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "39",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "hello",
                        "type" : "Literal"
                     }, {
                        "localId" : "40",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "world",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "44",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "42",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }, {
                        "localId" : "43",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "bar",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "66",
            "name" : "EqualTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "66",
                  "s" : [ {
                     "value" : [ "","define ","EqualTupleList",": " ]
                  }, {
                     "r" : "65",
                     "s" : [ {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "47",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "51",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "48",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "50",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "49",
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
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "52",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "53",
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
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "56",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "57",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "59",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "58",
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
                           "r" : "63",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "61",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "62",
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
               "localId" : "65",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "55",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "51",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "48",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "50",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "49",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "54",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "52",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "53",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  }, {
                     "localId" : "64",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "60",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "57",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "59",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "58",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "63",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "61",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "62",
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
            "localId" : "87",
            "name" : "UnequalTupleList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "87",
                  "s" : [ {
                     "value" : [ "","define ","UnequalTupleList",": " ]
                  }, {
                     "r" : "86",
                     "s" : [ {
                        "r" : "75",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "71",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "68",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "70",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "r" : "69",
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
                           "r" : "74",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "72",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "73",
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
                        "r" : "85",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Any" ]
                           } ]
                        }, {
                           "value" : [ ">{ " ]
                        }, {
                           "r" : "81",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "77",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",": " ]
                              }, {
                                 "r" : "80",
                                 "s" : [ {
                                    "value" : [ "Tuple{" ]
                                 }, {
                                    "s" : [ {
                                       "value" : [ "c",": " ]
                                    }, {
                                       "r" : "79",
                                       "s" : [ {
                                          "r" : "78",
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
                           "r" : "84",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "x",": " ]
                              }, {
                                 "r" : "82",
                                 "s" : [ {
                                    "value" : [ "'y'" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "83",
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
               "localId" : "86",
               "type" : "Not",
               "operand" : {
                  "type" : "Equal",
                  "operand" : [ {
                     "localId" : "75",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "71",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "68",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "70",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "69",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                    "value" : "1",
                                    "type" : "Literal"
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "74",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "72",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "73",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "2",
                              "type" : "Literal"
                           }
                        } ]
                     } ]
                  }, {
                     "localId" : "85",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "81",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "a",
                           "value" : {
                              "localId" : "77",
                              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                              "value" : "1",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "b",
                           "value" : {
                              "localId" : "80",
                              "type" : "Tuple",
                              "element" : [ {
                                 "name" : "c",
                                 "value" : {
                                    "localId" : "79",
                                    "type" : "Negate",
                                    "operand" : {
                                       "localId" : "78",
                                       "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                       "value" : "1",
                                       "type" : "Literal"
                                    }
                                 }
                              } ]
                           }
                        } ]
                     }, {
                        "localId" : "84",
                        "type" : "Tuple",
                        "element" : [ {
                           "name" : "x",
                           "value" : {
                              "localId" : "82",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "y",
                              "type" : "Literal"
                           }
                        }, {
                           "name" : "z",
                           "value" : {
                              "localId" : "83",
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
            "localId" : "15",
            "name" : "OneToTen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","OneToTen",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "{","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Union",
               "operand" : [ {
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
               }, {
                  "localId" : "13",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "26",
            "name" : "OneToFiveOverlapped",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "26",
                  "s" : [ {
                     "value" : [ "","define ","OneToFiveOverlapped",": " ]
                  }, {
                     "r" : "25",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "24",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "{","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "25",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "20",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "24",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "OneToFiveOverlappedWithNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","OneToFiveOverlappedWithNulls",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "32",
                        "s" : [ {
                           "r" : "27",
                           "value" : [ "{","1",", ","null",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "33",
                           "value" : [ "{","3",", ","4",", ","5",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "32",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "28",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "36",
                        "type" : "Null"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "47",
            "name" : "Disjoint",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","Disjoint",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "r" : "42",
                        "s" : [ {
                           "r" : "40",
                           "value" : [ "{","1",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "r" : "43",
                           "value" : [ "{","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "46",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "42",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "45",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "72",
            "name" : "NestedToFifteen",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "","define ","NestedToFifteen",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "r" : "66",
                        "s" : [ {
                           "r" : "61",
                           "s" : [ {
                              "r" : "56",
                              "s" : [ {
                                 "r" : "51",
                                 "s" : [ {
                                    "r" : "48",
                                    "value" : [ "{","1",", ","2",", ","3","}" ]
                                 } ]
                              }, {
                                 "value" : [ " union " ]
                              }, {
                                 "r" : "55",
                                 "s" : [ {
                                    "r" : "52",
                                    "value" : [ "{","4",", ","5",", ","6","}" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ " union " ]
                           }, {
                              "r" : "60",
                              "s" : [ {
                                 "r" : "57",
                                 "value" : [ "{","7"," ,","8"," , ","9","}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "65",
                           "s" : [ {
                              "r" : "62",
                              "value" : [ "{","10",", ","11",", ","12","}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " union " ]
                     }, {
                        "r" : "70",
                        "s" : [ {
                           "r" : "67",
                           "value" : [ "{","13",", ","14",", ","15","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "66",
                  "type" : "Union",
                  "operand" : [ {
                     "localId" : "56",
                     "type" : "Union",
                     "operand" : [ {
                        "localId" : "51",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "48",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }, {
                           "localId" : "49",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }, {
                           "localId" : "50",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "55",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "4",
                           "type" : "Literal"
                        }, {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }, {
                           "localId" : "54",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "6",
                           "type" : "Literal"
                        } ]
                     } ]
                  }, {
                     "type" : "Union",
                     "operand" : [ {
                        "localId" : "60",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "57",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "7",
                           "type" : "Literal"
                        }, {
                           "localId" : "58",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "8",
                           "type" : "Literal"
                        }, {
                           "localId" : "59",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "9",
                           "type" : "Literal"
                        } ]
                     }, {
                        "localId" : "65",
                        "type" : "List",
                        "element" : [ {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "10",
                           "type" : "Literal"
                        }, {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "11",
                           "type" : "Literal"
                        }, {
                           "localId" : "64",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "12",
                           "type" : "Literal"
                        } ]
                     } ]
                  } ]
               }, {
                  "localId" : "70",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "13",
                     "type" : "Literal"
                  }, {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "14",
                     "type" : "Literal"
                  }, {
                     "localId" : "69",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "15",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "79",
            "name" : "NullUnion",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "79",
                  "s" : [ {
                     "value" : [ "","define ","NullUnion",": " ]
                  }, {
                     "r" : "78",
                     "s" : [ {
                        "r" : "73",
                        "value" : [ "null"," union " ]
                     }, {
                        "r" : "77",
                        "s" : [ {
                           "r" : "74",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "78",
               "type" : "Union",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "73",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "77",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "74",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "75",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "76",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "86",
            "name" : "UnionNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "86",
                  "s" : [ {
                     "value" : [ "","define ","UnionNull",": " ]
                  }, {
                     "r" : "85",
                     "s" : [ {
                        "r" : "83",
                        "s" : [ {
                           "r" : "80",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "84",
                        "value" : [ " union ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "85",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "83",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "80",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "81",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "82",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "84",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "96",
            "name" : "nullUnionNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "96",
                  "s" : [ {
                     "value" : [ "","define ","nullUnionNull",": " ]
                  }, {
                     "r" : "95",
                     "s" : [ {
                        "r" : "90",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "90",
                           "s" : [ {
                              "r" : "87",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "89",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "88",
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
                        "r" : "94",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "94",
                           "s" : [ {
                              "r" : "91",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "93",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "92",
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
               "localId" : "95",
               "type" : "Union",
               "operand" : [ {
                  "localId" : "90",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "87",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "89",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "88",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "94",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "91",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "93",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "92",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "126",
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
            "localId" : "12",
            "name" : "ExceptThreeFour",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","ExceptThreeFour",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "{","3",", ","4","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "Except",
               "operand" : [ {
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
               }, {
                  "localId" : "10",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "23",
            "name" : "ThreeFourExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","ThreeFourExcept",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "r" : "15",
                        "s" : [ {
                           "r" : "13",
                           "value" : [ "{","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "15",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "21",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "34",
            "name" : "ExceptFiveThree",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","ExceptFiveThree",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "r" : "29",
                        "s" : [ {
                           "r" : "24",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "r" : "30",
                           "value" : [ "{","5",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "29",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "32",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "49",
            "name" : "ExceptNoOp",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "","define ","ExceptNoOp",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "r" : "41",
                        "s" : [ {
                           "r" : "35",
                           "value" : [ "{","1",", ","2",", ","3",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "r" : "42",
                           "value" : [ "{","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "39",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "47",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "64",
            "name" : "ExceptEverything",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","ExceptEverything",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "r" : "56",
                        "s" : [ {
                           "r" : "50",
                           "value" : [ "{","1",", ","2",", ","3",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "r" : "57",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "56",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "55",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "62",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "57",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "58",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "59",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "76",
            "name" : "MultipleNullExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "76",
                  "s" : [ {
                     "value" : [ "","define ","MultipleNullExcept",": " ]
                  }, {
                     "r" : "75",
                     "s" : [ {
                        "r" : "71",
                        "s" : [ {
                           "r" : "65",
                           "value" : [ "{","1",", ","3",", ","5",", ","7",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "74",
                        "s" : [ {
                           "r" : "72",
                           "value" : [ "{","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "75",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "71",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "65",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "66",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "69",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "70",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "74",
                  "type" : "List",
                  "element" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "72",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "73",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "86",
            "name" : "SomethingExceptNothing",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "86",
                  "s" : [ {
                     "value" : [ "","define ","SomethingExceptNothing",": " ]
                  }, {
                     "r" : "85",
                     "s" : [ {
                        "r" : "82",
                        "s" : [ {
                           "r" : "77",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "84",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "83",
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
               "localId" : "85",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "82",
                  "type" : "List",
                  "element" : [ {
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
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "80",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "81",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "84",
                  "type" : "List"
               } ]
            }
         }, {
            "localId" : "96",
            "name" : "NothingExceptSomething",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "96",
                  "s" : [ {
                     "value" : [ "","define ","NothingExceptSomething",": " ]
                  }, {
                     "r" : "95",
                     "s" : [ {
                        "r" : "88",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "87",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        }, {
                           "value" : [ ">{}" ]
                        } ]
                     }, {
                        "value" : [ " except " ]
                     }, {
                        "r" : "94",
                        "s" : [ {
                           "r" : "89",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "95",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "88",
                  "type" : "List"
               }, {
                  "localId" : "94",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "89",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "91",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "108",
            "name" : "ExceptTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "108",
                  "s" : [ {
                     "value" : [ "","define ","ExceptTuples",": " ]
                  }, {
                     "r" : "107",
                     "s" : [ {
                        "r" : "103",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "98",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "97",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "100",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "99",
                                 "value" : [ "a",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "101",
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
                        "r" : "106",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "105",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "104",
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
               "localId" : "107",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "103",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "98",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "97",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "100",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "99",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "102",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "101",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "106",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "105",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "104",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "117",
            "name" : "ExceptNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "117",
                  "s" : [ {
                     "value" : [ "","define ","ExceptNull",": " ]
                  }, {
                     "r" : "116",
                     "s" : [ {
                        "r" : "114",
                        "s" : [ {
                           "r" : "109",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "115",
                        "value" : [ " except ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "116",
               "type" : "Except",
               "operand" : [ {
                  "localId" : "114",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "111",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "112",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "113",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "115",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "126",
            "name" : "NullExcept",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "126",
                  "s" : [ {
                     "value" : [ "","define ","NullExcept",": " ]
                  }, {
                     "r" : "125",
                     "s" : [ {
                        "r" : "118",
                        "value" : [ "null"," except " ]
                     }, {
                        "r" : "124",
                        "s" : [ {
                           "r" : "119",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "125",
               "type" : "Except",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "118",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "124",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "119",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "120",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "121",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "122",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "123",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "149",
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
            "localId" : "12",
            "name" : "NoIntersection",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","NoIntersection",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "r" : "7",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "6",
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
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "10",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "24",
            "name" : "IntersectOnFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "24",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnFive",": " ]
                  }, {
                     "r" : "23",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "r" : "13",
                           "value" : [ "{","4",", ","5",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "22",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{","1",", ","3",", ","5",", ","7","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "23",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "22",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "37",
            "name" : "IntersectionOnFourDuplicates",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "37",
                  "s" : [ {
                     "value" : [ "","define ","IntersectionOnFourDuplicates",": " ]
                  }, {
                     "r" : "36",
                     "s" : [ {
                        "r" : "30",
                        "s" : [ {
                           "r" : "25",
                           "value" : [ "{","4",", ","4",", ","1",", ","1",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "r" : "31",
                           "value" : [ "{","4",", ","4",", ","3",", ","9","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "36",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "30",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "35",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "58",
            "name" : "IntersectOnEvens",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "58",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnEvens",": " ]
                  }, {
                     "r" : "57",
                     "s" : [ {
                        "r" : "48",
                        "s" : [ {
                           "r" : "38",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5",", ","6",", ","7",", ","8",", ","9",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "56",
                        "s" : [ {
                           "r" : "49",
                           "value" : [ "{","0",", ","2",", ","4",", ","6",", ","8",", ","10",", ","12","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "57",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "48",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "39",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "7",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "9",
                     "type" : "Literal"
                  }, {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "56",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "49",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  }, {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  }, {
                     "localId" : "55",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "12",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "72",
            "name" : "IntersectOnAll",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "72",
                  "s" : [ {
                     "value" : [ "","define ","IntersectOnAll",": " ]
                  }, {
                     "r" : "71",
                     "s" : [ {
                        "r" : "64",
                        "s" : [ {
                           "r" : "59",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "70",
                        "s" : [ {
                           "r" : "65",
                           "value" : [ "{","5",", ","4",", ","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "71",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "64",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "59",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "70",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "65",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "66",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "67",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "68",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "69",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "100",
            "name" : "NestedIntersects",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "100",
                  "s" : [ {
                     "value" : [ "","define ","NestedIntersects",": " ]
                  }, {
                     "r" : "99",
                     "s" : [ {
                        "r" : "92",
                        "s" : [ {
                           "r" : "85",
                           "s" : [ {
                              "r" : "78",
                              "s" : [ {
                                 "r" : "73",
                                 "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                              } ]
                           }, {
                              "value" : [ " intersect " ]
                           }, {
                              "r" : "84",
                              "s" : [ {
                                 "r" : "79",
                                 "value" : [ "{","2",", ","3",", ","4",", ","5",", ","6","}" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " intersect " ]
                        }, {
                           "r" : "91",
                           "s" : [ {
                              "r" : "86",
                              "value" : [ "{","3",", ","4",", ","5",", ","6",", ","7","}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "98",
                        "s" : [ {
                           "r" : "93",
                           "value" : [ "{","4",", ","5",", ","6",", ","7",", ","8","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "99",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "85",
                  "type" : "Intersect",
                  "operand" : [ {
                     "localId" : "78",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "73",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "74",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "75",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "76",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "77",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "84",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "79",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "80",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "81",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "82",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "83",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  } ]
               }, {
                  "type" : "Intersect",
                  "operand" : [ {
                     "localId" : "91",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "86",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "87",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "88",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "89",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "90",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "98",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "93",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "94",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "95",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "96",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "97",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "125",
            "name" : "IntersectTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "125",
                  "s" : [ {
                     "value" : [ "","define ","IntersectTuples",": " ]
                  }, {
                     "r" : "124",
                     "s" : [ {
                        "r" : "110",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "103",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "101",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "102",
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
                           "r" : "106",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "104",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "105",
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
                           "r" : "109",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "107",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "108",
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
                        "r" : "123",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "113",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "111",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "112",
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
                           "r" : "116",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "114",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "115",
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
                           "r" : "119",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "117",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "118",
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
                           "r" : "122",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "120",
                                 "value" : [ "a",":","5" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "121",
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
               "localId" : "124",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "110",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "103",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "101",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "102",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "106",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "104",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "105",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "109",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "107",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "108",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "123",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "113",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "111",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "112",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "116",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "114",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "115",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "119",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "117",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "118",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "122",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "120",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "5",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "121",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "e",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "132",
            "name" : "NullIntersect",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "132",
                  "s" : [ {
                     "value" : [ "","define ","NullIntersect",": " ]
                  }, {
                     "r" : "131",
                     "s" : [ {
                        "r" : "126",
                        "value" : [ "null"," intersect " ]
                     }, {
                        "r" : "130",
                        "s" : [ {
                           "r" : "127",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "131",
               "type" : "Intersect",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "126",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "130",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "127",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "128",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "129",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "139",
            "name" : "IntersectNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "139",
                  "s" : [ {
                     "value" : [ "","define ","IntersectNull",": " ]
                  }, {
                     "r" : "138",
                     "s" : [ {
                        "r" : "136",
                        "s" : [ {
                           "r" : "133",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "137",
                        "value" : [ " intersect ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "138",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "136",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "133",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "134",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "135",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "137",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "149",
            "name" : "MultipleNullInListIntersect",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "149",
                  "s" : [ {
                     "value" : [ "","define ","MultipleNullInListIntersect",": " ]
                  }, {
                     "r" : "148",
                     "s" : [ {
                        "r" : "144",
                        "s" : [ {
                           "r" : "140",
                           "value" : [ "{","1",", ","2",", ","3",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ " intersect " ]
                     }, {
                        "r" : "147",
                        "s" : [ {
                           "r" : "145",
                           "value" : [ "{","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "148",
               "type" : "Intersect",
               "operand" : [ {
                  "localId" : "144",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "140",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "141",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "142",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "143",
                        "type" : "Null"
                     }
                  } ]
               }, {
                  "localId" : "147",
                  "type" : "List",
                  "element" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "145",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "146",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "95",
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
            "name" : "IndexOfSecond",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","IndexOfSecond",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
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
               "localId" : "8",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "b",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "20",
            "name" : "IndexOfThirdTuple",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "20",
                  "s" : [ {
                     "value" : [ "","define ","IndexOfThirdTuple",": " ]
                  }, {
                     "r" : "19",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "16",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "10",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "12",
                                 "value" : [ "a",": ","2" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "15",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "14",
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
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "17",
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
               "localId" : "19",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "16",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "11",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "10",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "13",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "12",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "15",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "14",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "18",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "31",
            "name" : "MultipleMatches",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","MultipleMatches",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "23",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "25",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "26",
                           "s" : [ {
                              "value" : [ "'e'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "29",
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
               "localId" : "30",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "28",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  }, {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "e",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "29",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "38",
            "name" : "ItemNotFound",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "38",
                  "s" : [ {
                     "value" : [ "","define ","ItemNotFound",": " ]
                  }, {
                     "r" : "37",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "35",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "36",
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
               "localId" : "37",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "35",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "localId" : "36",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "d",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "42",
            "name" : "NullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "","define ","NullList",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "r" : "39",
                        "value" : [ "IndexOf","(","null",", " ]
                     }, {
                        "r" : "40",
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
               "localId" : "41",
               "type" : "IndexOf",
               "source" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "39",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "element" : {
                  "localId" : "40",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "49",
            "name" : "NullItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "","define ","NullItem",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "46",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "43",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "45",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "47",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "48",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "46",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               },
               "element" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "47",
                     "type" : "Null"
                  }
               }
            }
         }, {
            "localId" : "62",
            "name" : "ListCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "62",
                  "s" : [ {
                     "value" : [ "","define ","ListCode",": " ]
                  }, {
                     "r" : "61",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "55",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "50",
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
                                 "r" : "51",
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
                                 "r" : "52",
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
                                 "r" : "53",
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
                        "r" : "60",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "56",
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
                              "r" : "57",
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
                              "r" : "58",
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
                              "r" : "59",
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
               "localId" : "61",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "55",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "54",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "50",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "51",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "display",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "foo",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "60",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "56",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "57",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "58",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "display",
                     "value" : {
                        "localId" : "59",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "73",
            "name" : "ListCodeUndefined",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "73",
                  "s" : [ {
                     "value" : [ "","define ","ListCodeUndefined",": " ]
                  }, {
                     "r" : "72",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "67",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "66",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "63",
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
                                 "r" : "64",
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
                                 "r" : "65",
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
                        "r" : "71",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "68",
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
                              "r" : "69",
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
                              "r" : "70",
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
               "localId" : "72",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "67",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "66",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "64",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "71",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "68",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "69",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "70",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "HL7V2.5",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "84",
            "name" : "ListWrongCode",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "84",
                  "s" : [ {
                     "value" : [ "","define ","ListWrongCode",": " ]
                  }, {
                     "r" : "83",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "78",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "77",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "74",
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
                                 "r" : "75",
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
                                 "r" : "76",
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
                        "r" : "82",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "79",
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
                              "r" : "80",
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
                              "r" : "81",
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
               "localId" : "83",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "78",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "77",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "74",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "M",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "75",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "2.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "76",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "82",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "79",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "80",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "81",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "foo",
                        "type" : "Literal"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "95",
            "name" : "ListWrongCodeSystem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "95",
                  "s" : [ {
                     "value" : [ "","define ","ListWrongCodeSystem",": " ]
                  }, {
                     "r" : "94",
                     "s" : [ {
                        "value" : [ "IndexOf","(" ]
                     }, {
                        "r" : "89",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "88",
                           "s" : [ {
                              "value" : [ "Code","{" ]
                           }, {
                              "s" : [ {
                                 "value" : [ "code",": " ]
                              }, {
                                 "r" : "85",
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
                                 "r" : "86",
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
                                 "r" : "87",
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
                        "r" : "93",
                        "s" : [ {
                           "value" : [ "Code","{" ]
                        }, {
                           "s" : [ {
                              "value" : [ "code",": " ]
                           }, {
                              "r" : "90",
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
                              "r" : "91",
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
                              "r" : "92",
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
               "localId" : "94",
               "type" : "IndexOf",
               "source" : {
                  "localId" : "89",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "88",
                     "classType" : "{urn:hl7-org:elm-types:r1}Code",
                     "type" : "Instance",
                     "element" : [ {
                        "name" : "code",
                        "value" : {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "F",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "system",
                        "value" : {
                           "localId" : "86",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "1.16.840.1.113883.18.2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "version",
                        "value" : {
                           "localId" : "87",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "HL7V2.5",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               },
               "element" : {
                  "localId" : "93",
                  "classType" : "{urn:hl7-org:elm-types:r1}Code",
                  "type" : "Instance",
                  "element" : [ {
                     "name" : "code",
                     "value" : {
                        "localId" : "90",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "F",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "system",
                     "value" : {
                        "localId" : "91",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2.16.840.1.113883.18.2",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "version",
                     "value" : {
                        "localId" : "92",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "40",
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
            "name" : "SecondItem",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","SecondItem",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "3",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "4",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "7",
                        "value" : [ "[","1","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "17",
            "name" : "ZeroIndex",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","ZeroIndex",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ "[","0","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "14",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "15",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "OutOfBounds",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","OutOfBounds",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "22",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "20",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "23",
                        "value" : [ "[","100","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "22",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "23",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "100",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "32",
            "name" : "NullList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "32",
                  "s" : [ {
                     "value" : [ "","define ","NullList",": " ]
                  }, {
                     "r" : "31",
                     "s" : [ {
                        "r" : "29",
                        "s" : [ {
                           "value" : [ "(" ]
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
                        "r" : "30",
                        "value" : [ "[","1","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "31",
               "type" : "Indexer",
               "operand" : [ {
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
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "30",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "40",
            "name" : "NullIndexer",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "40",
                  "s" : [ {
                     "value" : [ "","define ","NullIndexer",": " ]
                  }, {
                     "r" : "39",
                     "s" : [ {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "34",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "'c'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "'d'" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "38",
                        "value" : [ "[","null","]" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "39",
               "type" : "Indexer",
               "operand" : [ {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "d",
                     "type" : "Literal"
                  } ]
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "38",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "64",
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
            "name" : "IsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","IsIn",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "4"," in " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "3",
                           "value" : [ "{ ","3",", ","4",", ","5"," }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "In",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "localId" : "6",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "15",
            "name" : "IsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIn",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "9",
                        "value" : [ "4"," in " ]
                     }, {
                        "r" : "13",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{ ","3",", ","5",", ","6"," }" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "In",
               "operand" : [ {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "localId" : "13",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "30",
            "name" : "TupleIsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsIn",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "18",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "16",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "17",
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
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "19",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "20",
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
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "22",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "23",
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
                           "r" : "27",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "25",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "26",
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
               "localId" : "29",
               "type" : "In",
               "operand" : [ {
                  "localId" : "18",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "28",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "19",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "20",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "24",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "22",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "23",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "27",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "25",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "26",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "TupleIsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsNotIn",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "31",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "32",
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
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "34",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "35",
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
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "37",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "38",
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
                           "r" : "42",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "40",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "41",
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
               "localId" : "44",
               "type" : "In",
               "operand" : [ {
                  "localId" : "33",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "31",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "32",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "43",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "36",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "34",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "35",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "39",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "37",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "42",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "40",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "41",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "53",
            "name" : "NullIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","NullIn",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "r" : "46",
                        "value" : [ "null"," in " ]
                     }, {
                        "r" : "51",
                        "s" : [ {
                           "r" : "47",
                           "value" : [ "{","1",", ","2",", ","null",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "52",
               "type" : "In",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "46",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "51",
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
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "49",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "57",
            "name" : "InNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "57",
                  "s" : [ {
                     "value" : [ "","define ","InNull",": " ]
                  }, {
                     "r" : "56",
                     "s" : [ {
                        "r" : "54",
                        "value" : [ "1"," in ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "56",
               "type" : "In",
               "operand" : [ {
                  "localId" : "54",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "55",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "64",
            "name" : "NullNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "64",
                  "s" : [ {
                     "value" : [ "","define ","NullNotIn",": " ]
                  }, {
                     "r" : "63",
                     "s" : [ {
                        "r" : "58",
                        "value" : [ "null"," in " ]
                     }, {
                        "r" : "62",
                        "s" : [ {
                           "r" : "59",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "63",
               "type" : "In",
               "operand" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "58",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "62",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "59",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "60",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "61",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "67",
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
            "name" : "IsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","IsIn",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{ ","3",", ","4",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "6",
                        "value" : [ " contains ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "5",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "15",
            "name" : "IsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIn",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "r" : "12",
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "{ ","3",", ","5",", ","6"," }" ]
                        } ]
                     }, {
                        "r" : "13",
                        "value" : [ " contains ","4" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "13",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "30",
            "name" : "TupleIsIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "30",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsIn",": " ]
                  }, {
                     "r" : "29",
                     "s" : [ {
                        "r" : "25",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "16",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "17",
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
                           "r" : "21",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "19",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "20",
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
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "22",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "23",
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
                        "r" : "28",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "26",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "27",
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
               "localId" : "29",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "25",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "16",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "17",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "21",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "19",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "20",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "24",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "22",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "23",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "28",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "26",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "27",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "45",
            "name" : "TupleIsNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "45",
                  "s" : [ {
                     "value" : [ "","define ","TupleIsNotIn",": " ]
                  }, {
                     "r" : "44",
                     "s" : [ {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "31",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "32",
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
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "34",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "35",
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
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "37",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "38",
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
                        "r" : "43",
                        "s" : [ {
                           "value" : [ "Tuple{" ]
                        }, {
                           "s" : [ {
                              "r" : "41",
                              "value" : [ "a",": ","1" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "s" : [ {
                              "value" : [ "b",": " ]
                           }, {
                              "r" : "42",
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
               "localId" : "44",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "40",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "33",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "31",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "32",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "36",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "34",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "35",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "39",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "37",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "43",
                  "type" : "Tuple",
                  "element" : [ {
                     "name" : "a",
                     "value" : {
                        "localId" : "41",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }, {
                     "name" : "b",
                     "value" : {
                        "localId" : "42",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "52",
            "name" : "InNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","InNull",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "49",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "49",
                           "s" : [ {
                              "r" : "46",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "48",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "47",
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
                        "r" : "50",
                        "value" : [ " contains ","1" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "49",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "46",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "48",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "47",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "50",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "60",
            "name" : "NullIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "","define ","NullIn",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "r" : "57",
                        "s" : [ {
                           "r" : "53",
                           "value" : [ "{","1",", ","2",", ","null",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "58",
                        "value" : [ " contains ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "57",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "53",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "55",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "56",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "58",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "67",
            "name" : "NullNotIn",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "67",
                  "s" : [ {
                     "value" : [ "","define ","NullNotIn",": " ]
                  }, {
                     "r" : "66",
                     "s" : [ {
                        "r" : "64",
                        "s" : [ {
                           "r" : "61",
                           "value" : [ "{","1",", ","2",", ","3","}" ]
                        } ]
                     }, {
                        "r" : "65",
                        "value" : [ " contains ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "66",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "64",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "61",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "62",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "63",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  } ]
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "65",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
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
            "r" : "189",
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
            "localId" : "13",
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "12",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "Includes",
               "operand" : [ {
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
               }, {
                  "localId" : "11",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "19",
                        "s" : [ {
                           "r" : "14",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "24",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "20",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "19",
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
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "38",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "51",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "45",
                        "s" : [ {
                           "r" : "40",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "50",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "r" : "46",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "45",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "49",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "48",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "70",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "r" : "61",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "52",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "53",
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
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "55",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "56",
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
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "58",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "59",
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
                        "r" : "69",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "62",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "63",
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
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "65",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "66",
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
               "localId" : "69",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "61",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "54",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "57",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "55",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "56",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "60",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "58",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "59",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "68",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "64",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "67",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "89",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "89",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "88",
                     "s" : [ {
                        "r" : "80",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "73",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "71",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "72",
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
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "74",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "75",
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
                           "r" : "79",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "77",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "78",
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
                        "r" : "88",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "87",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "83",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "81",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "82",
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
                           "r" : "86",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "84",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "85",
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
               "localId" : "88",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "80",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "73",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "71",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "76",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "74",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "75",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "79",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "77",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "87",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "83",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "81",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "86",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "84",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "98",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "98",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "97",
                     "s" : [ {
                        "r" : "95",
                        "s" : [ {
                           "r" : "90",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "97",
                        "value" : [ " ","includes"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "97",
               "type" : "Includes",
               "operand" : [ {
                  "localId" : "95",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "91",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "94",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "96",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "107",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "107",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "106",
                     "s" : [ {
                        "r" : "99",
                        "value" : [ "null"," ","includes"," " ]
                     }, {
                        "r" : "105",
                        "s" : [ {
                           "r" : "100",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "106",
               "type" : "Includes",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "99",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "105",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "100",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "101",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "102",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "126",
            "name" : "DayIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "126",
                  "s" : [ {
                     "value" : [ "","define ","DayIncluded",": " ]
                  }, {
                     "r" : "125",
                     "s" : [ {
                        "r" : "120",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "111",
                           "s" : [ {
                              "r" : "108",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "115",
                           "s" : [ {
                              "r" : "112",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "119",
                           "s" : [ {
                              "r" : "116",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "125",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "124",
                        "s" : [ {
                           "r" : "121",
                           "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "125",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "120",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "111",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "108",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "109",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "110",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "115",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "112",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "113",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "114",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "119",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "116",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "117",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "118",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "124",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "121",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "122",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "123",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "145",
            "name" : "DayNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "145",
                  "s" : [ {
                     "value" : [ "","define ","DayNotIncluded",": " ]
                  }, {
                     "r" : "144",
                     "s" : [ {
                        "r" : "139",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "130",
                           "s" : [ {
                              "r" : "127",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "134",
                           "s" : [ {
                              "r" : "131",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "138",
                           "s" : [ {
                              "r" : "135",
                              "value" : [ "DateTime","(","2012",", ","3",", ","4",")" ]
                           } ]
                        }, {
                           "value" : [ "}" ]
                        } ]
                     }, {
                        "r" : "144",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "143",
                        "s" : [ {
                           "r" : "140",
                           "value" : [ "DateTime","(","2014",", ","3",", ","3",")" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "144",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "139",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "130",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "127",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "128",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "129",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "134",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "131",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "132",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "133",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "138",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "135",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "136",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "137",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "143",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "140",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "141",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "142",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "154",
            "name" : "IntegerIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "154",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIncluded",": " ]
                  }, {
                     "r" : "153",
                     "s" : [ {
                        "r" : "151",
                        "s" : [ {
                           "r" : "146",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "153",
                        "value" : [ " ","includes"," ","3" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "153",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "151",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "146",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "147",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "148",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "149",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "150",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "152",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "163",
            "name" : "IntegerNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "163",
                  "s" : [ {
                     "value" : [ "","define ","IntegerNotIncluded",": " ]
                  }, {
                     "r" : "162",
                     "s" : [ {
                        "r" : "160",
                        "s" : [ {
                           "r" : "155",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "162",
                        "value" : [ " ","includes"," ","33" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "162",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "160",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "155",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "156",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "157",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "158",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "159",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "161",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "33",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "176",
            "name" : "QuantityInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "176",
                  "s" : [ {
                     "value" : [ "","define ","QuantityInList",": " ]
                  }, {
                     "r" : "175",
                     "s" : [ {
                        "r" : "172",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "165",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "164",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "167",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "166",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "169",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "168",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "171",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "170",
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
                        "r" : "175",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "174",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "173",
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
               "localId" : "175",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "172",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "165",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "164",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "167",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "166",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "169",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "168",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "171",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "170",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "174",
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "173",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1 'm'",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "189",
            "name" : "QuantityNotInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "189",
                  "s" : [ {
                     "value" : [ "","define ","QuantityNotInList",": " ]
                  }, {
                     "r" : "188",
                     "s" : [ {
                        "r" : "185",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "178",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "177",
                              "s" : [ {
                                 "value" : [ "'100 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "180",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "179",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "182",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "181",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "184",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "183",
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
                        "r" : "188",
                        "value" : [ " ","includes"," " ]
                     }, {
                        "r" : "187",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "186",
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
               "localId" : "188",
               "type" : "Contains",
               "operand" : [ {
                  "localId" : "185",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "178",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "177",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "100 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "180",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "179",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "182",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "181",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "184",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "183",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               }, {
                  "localId" : "187",
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "186",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
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
            "r" : "189",
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
            "localId" : "13",
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "r" : "12",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "5",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "11",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "r" : "14",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     }, {
                        "r" : "24",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "38",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "51",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "43",
                        "s" : [ {
                           "r" : "40",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "r" : "50",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "r" : "44",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "43",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "49",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "48",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "70",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "52",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "53",
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
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "55",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "56",
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
                        "r" : "69",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "61",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "59",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "60",
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
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "62",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "63",
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
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "65",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "66",
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
               "localId" : "69",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "58",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "54",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "57",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "55",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "56",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "68",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "61",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "59",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "60",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "64",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "67",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "89",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "89",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "88",
                     "s" : [ {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "73",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "71",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "72",
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
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "74",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "75",
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
                        "r" : "88",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "87",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "80",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "78",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "79",
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
                           "r" : "83",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "81",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "82",
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
                           "r" : "86",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "84",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "85",
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
               "localId" : "88",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "77",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "73",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "71",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "76",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "74",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "75",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "87",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "80",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "79",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "83",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "81",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "86",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "84",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "98",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "98",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "97",
                     "s" : [ {
                        "r" : "95",
                        "s" : [ {
                           "r" : "90",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "97",
                        "value" : [ " ","included in"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "97",
               "type" : "IncludedIn",
               "operand" : [ {
                  "localId" : "95",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "91",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "94",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "96",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "107",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "107",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "106",
                     "s" : [ {
                        "r" : "99",
                        "value" : [ "null"," ","included in"," " ]
                     }, {
                        "r" : "105",
                        "s" : [ {
                           "r" : "100",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "106",
               "type" : "IncludedIn",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "99",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "105",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "100",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "101",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "102",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "126",
            "name" : "DayIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "126",
                  "s" : [ {
                     "value" : [ "","define ","DayIncluded",": " ]
                  }, {
                     "r" : "125",
                     "s" : [ {
                        "r" : "111",
                        "s" : [ {
                           "r" : "108",
                           "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                        } ]
                     }, {
                        "r" : "125",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "124",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "115",
                           "s" : [ {
                              "r" : "112",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "119",
                           "s" : [ {
                              "r" : "116",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "123",
                           "s" : [ {
                              "r" : "120",
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
               "localId" : "125",
               "type" : "In",
               "operand" : [ {
                  "localId" : "111",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "108",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2012",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "109",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "110",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "124",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "115",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "112",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "113",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "114",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "119",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "116",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "117",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "118",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "123",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "120",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "121",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "122",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "145",
            "name" : "DayNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "145",
                  "s" : [ {
                     "value" : [ "","define ","DayNotIncluded",": " ]
                  }, {
                     "r" : "144",
                     "s" : [ {
                        "r" : "130",
                        "s" : [ {
                           "r" : "127",
                           "value" : [ "DateTime","(","2014",", ","3",", ","3",")" ]
                        } ]
                     }, {
                        "r" : "144",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "143",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "134",
                           "s" : [ {
                              "r" : "131",
                              "value" : [ "DateTime","(","2012",", ","3",", ","2",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "138",
                           "s" : [ {
                              "r" : "135",
                              "value" : [ "DateTime","(","2012",", ","3",", ","3",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "142",
                           "s" : [ {
                              "r" : "139",
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
               "localId" : "144",
               "type" : "In",
               "operand" : [ {
                  "localId" : "130",
                  "type" : "DateTime",
                  "year" : {
                     "localId" : "127",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2014",
                     "type" : "Literal"
                  },
                  "month" : {
                     "localId" : "128",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  },
                  "day" : {
                     "localId" : "129",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "143",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "134",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "131",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "132",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "133",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "138",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "135",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "136",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "137",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "142",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "139",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2012",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "140",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "141",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "154",
            "name" : "IntegerIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "154",
                  "s" : [ {
                     "value" : [ "","define ","IntegerIncluded",": " ]
                  }, {
                     "r" : "153",
                     "s" : [ {
                        "r" : "146",
                        "value" : [ "3"," ","included in"," " ]
                     }, {
                        "r" : "152",
                        "s" : [ {
                           "r" : "147",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "153",
               "type" : "In",
               "operand" : [ {
                  "localId" : "146",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               }, {
                  "localId" : "152",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "147",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "148",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "149",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "150",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "151",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "163",
            "name" : "IntegerNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "163",
                  "s" : [ {
                     "value" : [ "","define ","IntegerNotIncluded",": " ]
                  }, {
                     "r" : "162",
                     "s" : [ {
                        "r" : "155",
                        "value" : [ "33"," ","included in"," " ]
                     }, {
                        "r" : "161",
                        "s" : [ {
                           "r" : "156",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "162",
               "type" : "In",
               "operand" : [ {
                  "localId" : "155",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "33",
                  "type" : "Literal"
               }, {
                  "localId" : "161",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "156",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "157",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "158",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "159",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "160",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "176",
            "name" : "QuantityInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "176",
                  "s" : [ {
                     "value" : [ "","define ","QuantityInList",": " ]
                  }, {
                     "r" : "175",
                     "s" : [ {
                        "r" : "165",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "164",
                           "s" : [ {
                              "value" : [ "'1 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "175",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "174",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "167",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "166",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "169",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "168",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "171",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "170",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "173",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "172",
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
               "localId" : "175",
               "type" : "In",
               "operand" : [ {
                  "localId" : "165",
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "164",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1 'm'",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "174",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "167",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "166",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "169",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "168",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "171",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "170",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "173",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "172",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "3 'm'",
                        "type" : "Literal"
                     }
                  } ]
               } ]
            }
         }, {
            "localId" : "189",
            "name" : "QuantityNotInList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "189",
                  "s" : [ {
                     "value" : [ "","define ","QuantityNotInList",": " ]
                  }, {
                     "r" : "188",
                     "s" : [ {
                        "r" : "178",
                        "s" : [ {
                           "value" : [ "ToQuantity","(" ]
                        }, {
                           "r" : "177",
                           "s" : [ {
                              "value" : [ "'100 \\'m\\''" ]
                           } ]
                        }, {
                           "value" : [ ")" ]
                        } ]
                     }, {
                        "r" : "188",
                        "value" : [ " ","included in"," " ]
                     }, {
                        "r" : "187",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "180",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "179",
                              "s" : [ {
                                 "value" : [ "'1 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "182",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "181",
                              "s" : [ {
                                 "value" : [ "'1.995 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "184",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "183",
                              "s" : [ {
                                 "value" : [ "'2 \\'m\\''" ]
                              } ]
                           }, {
                              "value" : [ ")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "186",
                           "s" : [ {
                              "value" : [ "ToQuantity","(" ]
                           }, {
                              "r" : "185",
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
               "localId" : "188",
               "type" : "In",
               "operand" : [ {
                  "localId" : "178",
                  "type" : "ToQuantity",
                  "operand" : {
                     "localId" : "177",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "100 'm'",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "187",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "180",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "179",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "182",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "181",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "1.995 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "184",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "183",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "2 'm'",
                        "type" : "Literal"
                     }
                  }, {
                     "localId" : "186",
                     "type" : "ToQuantity",
                     "operand" : {
                        "localId" : "185",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
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
            "r" : "110",
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
            "localId" : "14",
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "13",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "8",
                           "value" : [ "{","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "ProperIncludes",
               "operand" : [ {
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
               }, {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
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
               } ]
            }
         }, {
            "localId" : "27",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "r" : "20",
                        "s" : [ {
                           "r" : "15",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "26",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "r" : "21",
                           "value" : [ "{","5",", ","4",", ","3",", ","2","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "20",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "25",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "23",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "33",
                        "s" : [ {
                           "r" : "28",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "40",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "r" : "34",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "33",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "31",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "39",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "54",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "54",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "53",
                     "s" : [ {
                        "r" : "47",
                        "s" : [ {
                           "r" : "42",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "53",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "52",
                        "s" : [ {
                           "r" : "48",
                           "value" : [ "{","3",", ","4",", ","5",", ","6","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "53",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "47",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "43",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "52",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "48",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "49",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "50",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "73",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "73",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "72",
                     "s" : [ {
                        "r" : "64",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "55",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "56",
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
                           "r" : "60",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "58",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "59",
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
                           "r" : "63",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "61",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "62",
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
                        "r" : "72",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "71",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "65",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "66",
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
                           "r" : "70",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "68",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "69",
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
               "localId" : "72",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "64",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "57",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "55",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "56",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "60",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "58",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "59",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "63",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "61",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "71",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "67",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "70",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "68",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "69",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "92",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "92",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "91",
                     "s" : [ {
                        "r" : "83",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "74",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "75",
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
                           "r" : "79",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "77",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "78",
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
                           "r" : "82",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "80",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "81",
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
                        "r" : "91",
                        "value" : [ " ","properly includes"," " ]
                     }, {
                        "r" : "90",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "86",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "84",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "85",
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
                           "r" : "89",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "87",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "88",
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
               "localId" : "91",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "83",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "76",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "74",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "75",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "79",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "77",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "82",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "80",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "81",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "90",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "86",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "84",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "89",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "87",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "88",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "101",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "101",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "100",
                     "s" : [ {
                        "r" : "98",
                        "s" : [ {
                           "r" : "93",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "100",
                        "value" : [ " ","properly includes"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "100",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "localId" : "98",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "94",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "95",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "96",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "97",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "99",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "110",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "110",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "109",
                     "s" : [ {
                        "r" : "102",
                        "value" : [ "null"," ","properly includes"," " ]
                     }, {
                        "r" : "108",
                        "s" : [ {
                           "r" : "103",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "109",
               "type" : "ProperIncludes",
               "operand" : [ {
                  "type" : "As",
                  "operand" : {
                     "localId" : "102",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "108",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "105",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "106",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "107",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
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
            "r" : "110",
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
            "localId" : "13",
            "name" : "IsIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","IsIncluded",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "r" : "5",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "r" : "12",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "11",
                        "s" : [ {
                           "r" : "6",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "5",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "11",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "25",
            "name" : "IsIncludedReversed",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","IsIncludedReversed",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "r" : "17",
                        "s" : [ {
                           "r" : "14",
                           "value" : [ "{","4",", ","3",", ","2","}" ]
                        } ]
                     }, {
                        "r" : "24",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "17",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "21",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "39",
            "name" : "IsSame",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","IsSame",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "r" : "31",
                        "s" : [ {
                           "r" : "26",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "38",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "r" : "32",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "38",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "31",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "29",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "30",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "32",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "33",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "34",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "35",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "36",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "51",
            "name" : "IsNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "51",
                  "s" : [ {
                     "value" : [ "","define ","IsNotIncluded",": " ]
                  }, {
                     "r" : "50",
                     "s" : [ {
                        "r" : "43",
                        "s" : [ {
                           "r" : "40",
                           "value" : [ "{","4",", ","5",", ","6","}" ]
                        } ]
                     }, {
                        "r" : "50",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "49",
                        "s" : [ {
                           "r" : "44",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "50",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "43",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "41",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "42",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  } ]
               }, {
                  "localId" : "49",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "44",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "45",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "46",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "47",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "48",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "70",
            "name" : "TuplesIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "70",
                  "s" : [ {
                     "value" : [ "","define ","TuplesIncluded",": " ]
                  }, {
                     "r" : "69",
                     "s" : [ {
                        "r" : "58",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "52",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "53",
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
                           "r" : "57",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "55",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "56",
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
                        "r" : "69",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "68",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "61",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "59",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "60",
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
                           "r" : "64",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "62",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "63",
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
                           "r" : "67",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "65",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "66",
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
               "localId" : "69",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "58",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "54",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "52",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "53",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "57",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "55",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "56",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "68",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "61",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "59",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "60",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "64",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "62",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "63",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "67",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "65",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "66",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "89",
            "name" : "TuplesNotIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "89",
                  "s" : [ {
                     "value" : [ "","define ","TuplesNotIncluded",": " ]
                  }, {
                     "r" : "88",
                     "s" : [ {
                        "r" : "77",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "73",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "71",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "72",
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
                           "r" : "76",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "74",
                                 "value" : [ "a",":","3" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "75",
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
                        "r" : "88",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "87",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "80",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "78",
                                 "value" : [ "a",":","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "79",
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
                           "r" : "83",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "81",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "82",
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
                           "r" : "86",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "84",
                                 "value" : [ "a",":","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "b",":" ]
                              }, {
                                 "r" : "85",
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
               "localId" : "88",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "77",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "73",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "71",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "72",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "76",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "74",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "75",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }, {
                  "localId" : "87",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "80",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "78",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "79",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "83",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "81",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "82",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "d",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "86",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "84",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "85",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "c",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               } ]
            }
         }, {
            "localId" : "98",
            "name" : "NullIncludes",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "98",
                  "s" : [ {
                     "value" : [ "","define ","NullIncludes",": " ]
                  }, {
                     "r" : "97",
                     "s" : [ {
                        "r" : "95",
                        "s" : [ {
                           "r" : "90",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     }, {
                        "r" : "97",
                        "value" : [ " ","properly included in"," ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "97",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "95",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "90",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "91",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "92",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "93",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "94",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               }, {
                  "type" : "As",
                  "operand" : {
                     "localId" : "96",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "110",
            "name" : "NullIncluded",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "110",
                  "s" : [ {
                     "value" : [ "","define ","NullIncluded",": " ]
                  }, {
                     "r" : "109",
                     "s" : [ {
                        "r" : "102",
                        "s" : [ {
                           "value" : [ "(" ]
                        }, {
                           "r" : "102",
                           "s" : [ {
                              "r" : "99",
                              "value" : [ "null"," as " ]
                           }, {
                              "r" : "101",
                              "s" : [ {
                                 "value" : [ "List<" ]
                              }, {
                                 "r" : "100",
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
                        "r" : "109",
                        "value" : [ " ","properly included in"," " ]
                     }, {
                        "r" : "108",
                        "s" : [ {
                           "r" : "103",
                           "value" : [ "{","1",", ","2",", ","3",", ","4",", ","5","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "109",
               "type" : "ProperIncludedIn",
               "operand" : [ {
                  "localId" : "102",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "99",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "101",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "100",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "108",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "103",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "104",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "105",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "106",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "107",
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
            "localId" : "28",
            "name" : "ListOfLists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","ListOfLists",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "flatten " ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "5",
                           "s" : [ {
                              "r" : "2",
                              "value" : [ "{","1",", ","2",", ","3","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "r" : "6",
                              "value" : [ "{","4",", ","5",", ","6","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "r" : "10",
                              "value" : [ "{","7",", ","8",", ","9","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "19",
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "{","9",", ","8",", ","7",", ","6",", ","5","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "r" : "20",
                              "value" : [ "{","4","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "25",
                           "s" : [ {
                              "r" : "22",
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
               "localId" : "27",
               "type" : "Flatten",
               "operand" : {
                  "localId" : "26",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "5",
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
                     } ]
                  }, {
                     "localId" : "9",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "7",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "8",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "13",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "11",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "12",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "19",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "14",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     }, {
                        "localId" : "15",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     }, {
                        "localId" : "18",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "21",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "20",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "25",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "22",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     }, {
                        "localId" : "23",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "24",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "31",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "r" : "29",
                        "value" : [ "flatten ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "Flatten",
               "operand" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "29",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "60",
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
            "localId" : "23",
            "name" : "LotsOfDups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","LotsOfDups",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","2",", ","3",", ","3",", ","3",", ","4",", ","4",", ","4",", ","4",", ","5",", ","5",", ","5",", ","5",", ","5",", ","4",", ","3",", ","2",", ","1","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Distinct",
               "operand" : {
                  "localId" : "21",
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
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
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
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "14",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "15",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "31",
            "name" : "NoDups",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "31",
                  "s" : [ {
                     "value" : [ "","define ","NoDups",": " ]
                  }, {
                     "r" : "30",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "29",
                        "s" : [ {
                           "r" : "24",
                           "value" : [ "{","2",", ","4",", ","6",", ","8",", ","10","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "30",
               "type" : "Distinct",
               "operand" : {
                  "localId" : "29",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "26",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "27",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "28",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "42",
            "name" : "DupsTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "42",
                  "s" : [ {
                     "value" : [ "","define ","DupsTuples",": " ]
                  }, {
                     "r" : "41",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "40",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "32",
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
                           "r" : "35",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "34",
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
                           "r" : "37",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "36",
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
                           "r" : "39",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "38",
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
               "localId" : "41",
               "type" : "Distinct",
               "operand" : {
                  "localId" : "40",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "33",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "32",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "35",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "34",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "cleveland",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "37",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "36",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "39",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "38",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "dolly",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "49",
            "name" : "NoDupsTuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "","define ","NoDupsTuples",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "44",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "43",
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
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "s" : [ {
                                 "value" : [ "hello",": " ]
                              }, {
                                 "r" : "45",
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
               "localId" : "48",
               "type" : "Distinct",
               "operand" : {
                  "localId" : "47",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "44",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "43",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "world",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "46",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "hello",
                        "value" : {
                           "localId" : "45",
                           "valueType" : "{urn:hl7-org:elm-types:r1}String",
                           "value" : "cleveland",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "60",
            "name" : "DuplicateNulls",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "60",
                  "s" : [ {
                     "value" : [ "","define ","DuplicateNulls",": " ]
                  }, {
                     "r" : "59",
                     "s" : [ {
                        "value" : [ "distinct " ]
                     }, {
                        "r" : "58",
                        "s" : [ {
                           "r" : "50",
                           "value" : [ "{","null",", ","1",", ","2",", ","null",", ","3",", ","4",", ","5",", ","null","}" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "59",
               "type" : "Distinct",
               "operand" : {
                  "localId" : "58",
                  "type" : "List",
                  "element" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "50",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "51",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "52",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "53",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "54",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "55",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "56",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "57",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "53",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "First",
               "source" : {
                  "localId" : "6",
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
                  } ]
               }
            }
         }, {
            "localId" : "14",
            "name" : "Letters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","Letters",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "11",
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
               "localId" : "13",
               "type" : "First",
               "source" : {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "15",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "19",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "20",
                              "s" : [ {
                                 "value" : [ "'e'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "21",
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
               "localId" : "24",
               "type" : "First",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "15",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "22",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "19",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     }, {
                        "localId" : "20",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "e",
                        "type" : "Literal"
                     }, {
                        "localId" : "21",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "f",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "36",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "26",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "27",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "28",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "30",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "31",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "32",
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
               "localId" : "35",
               "type" : "First",
               "source" : {
                  "localId" : "34",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "29",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "26",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "27",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "28",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "33",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "30",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "31",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "32",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "43",
            "name" : "Unordered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","Unordered",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "r" : "37",
                           "value" : [ "{","3",", ","1",", ","4",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "First",
               "source" : {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "39",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "47",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "value" : [ "First","(" ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "44",
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
               "localId" : "46",
               "type" : "First",
               "source" : {
                  "localId" : "45",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "53",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "value" : [ "First","(" ]
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
               "localId" : "52",
               "type" : "First",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "53",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","1",", ","2",", ","3",", ","4","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Last",
               "source" : {
                  "localId" : "6",
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
                  } ]
               }
            }
         }, {
            "localId" : "14",
            "name" : "Letters",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","Letters",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "10",
                           "s" : [ {
                              "value" : [ "'b'" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "11",
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
               "localId" : "13",
               "type" : "Last",
               "source" : {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "9",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }, {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "b",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "c",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "25",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "{" ]
                        }, {
                           "r" : "18",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "15",
                              "s" : [ {
                                 "value" : [ "'a'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "16",
                              "s" : [ {
                                 "value" : [ "'b'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "17",
                              "s" : [ {
                                 "value" : [ "'c'" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ "," ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "{" ]
                           }, {
                              "r" : "19",
                              "s" : [ {
                                 "value" : [ "'d'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "20",
                              "s" : [ {
                                 "value" : [ "'e'" ]
                              } ]
                           }, {
                              "value" : [ "," ]
                           }, {
                              "r" : "21",
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
               "localId" : "24",
               "type" : "Last",
               "source" : {
                  "localId" : "23",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "15",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "a",
                        "type" : "Literal"
                     }, {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "b",
                        "type" : "Literal"
                     }, {
                        "localId" : "17",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "c",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "22",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "19",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "d",
                        "type" : "Literal"
                     }, {
                        "localId" : "20",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "e",
                        "type" : "Literal"
                     }, {
                        "localId" : "21",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "f",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "36",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "36",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "35",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "34",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "29",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "26",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "27",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "28",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "33",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "30",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "31",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "32",
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
               "localId" : "35",
               "type" : "Last",
               "source" : {
                  "localId" : "34",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "29",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "26",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "27",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "28",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "33",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "30",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "31",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "32",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "43",
            "name" : "Unordered",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","Unordered",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "r" : "37",
                           "value" : [ "{","3",", ","1",", ","4",", ","2","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "42",
               "type" : "Last",
               "source" : {
                  "localId" : "41",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "37",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "38",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "39",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "40",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "47",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "value" : [ "Last","(" ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "44",
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
               "localId" : "46",
               "type" : "Last",
               "source" : {
                  "localId" : "45",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "53",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "53",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "52",
                     "s" : [ {
                        "value" : [ "Last","(" ]
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
               "localId" : "52",
               "type" : "Last",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "49",
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
            "name" : "Numbers",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Numbers",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{","2",", ","4",", ","6",", ","8",", ","10","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Length",
               "operand" : {
                  "localId" : "7",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "2",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  }, {
                     "localId" : "4",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "6",
                     "type" : "Literal"
                  }, {
                     "localId" : "5",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "8",
                     "type" : "Literal"
                  }, {
                     "localId" : "6",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "10",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "28",
            "name" : "Lists",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "28",
                  "s" : [ {
                     "value" : [ "","define ","Lists",": " ]
                  }, {
                     "r" : "27",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "26",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "r" : "10",
                              "value" : [ "{","1",", ","2",", ","3","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "17",
                           "s" : [ {
                              "r" : "14",
                              "value" : [ "{","4",", ","5",", ","6","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "21",
                           "s" : [ {
                              "r" : "18",
                              "value" : [ "{","7",", ","8",", ","9","}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "25",
                           "s" : [ {
                              "r" : "22",
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
               "localId" : "27",
               "type" : "Length",
               "operand" : {
                  "localId" : "26",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "13",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }, {
                        "localId" : "11",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2",
                        "type" : "Literal"
                     }, {
                        "localId" : "12",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "3",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "17",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "14",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "4",
                        "type" : "Literal"
                     }, {
                        "localId" : "15",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "5",
                        "type" : "Literal"
                     }, {
                        "localId" : "16",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "6",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "21",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "18",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "7",
                        "type" : "Literal"
                     }, {
                        "localId" : "19",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "8",
                        "type" : "Literal"
                     }, {
                        "localId" : "20",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "9",
                        "type" : "Literal"
                     } ]
                  }, {
                     "localId" : "25",
                     "type" : "List",
                     "element" : [ {
                        "localId" : "22",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "10",
                        "type" : "Literal"
                     }, {
                        "localId" : "23",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "11",
                        "type" : "Literal"
                     }, {
                        "localId" : "24",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "39",
            "name" : "Tuples",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "39",
                  "s" : [ {
                     "value" : [ "","define ","Tuples",": " ]
                  }, {
                     "r" : "38",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "{ " ]
                        }, {
                           "r" : "32",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "29",
                                 "value" : [ "a",": ","1" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "30",
                                 "value" : [ "b",": ","2" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "31",
                                 "value" : [ "c",": ","3" ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "36",
                           "s" : [ {
                              "value" : [ "Tuple{" ]
                           }, {
                              "s" : [ {
                                 "r" : "33",
                                 "value" : [ "a",": ","24" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "34",
                                 "value" : [ "b",": ","25" ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "s" : [ {
                                 "r" : "35",
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
               "localId" : "38",
               "type" : "Length",
               "operand" : {
                  "localId" : "37",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "32",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "29",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "1",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "30",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "2",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "31",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "3",
                           "type" : "Literal"
                        }
                     } ]
                  }, {
                     "localId" : "36",
                     "type" : "Tuple",
                     "element" : [ {
                        "name" : "a",
                        "value" : {
                           "localId" : "33",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "24",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "b",
                        "value" : {
                           "localId" : "34",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "25",
                           "type" : "Literal"
                        }
                     }, {
                        "name" : "c",
                        "value" : {
                           "localId" : "35",
                           "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                           "value" : "26",
                           "type" : "Literal"
                        }
                     } ]
                  } ]
               }
            }
         }, {
            "localId" : "43",
            "name" : "Empty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "43",
                  "s" : [ {
                     "value" : [ "","define ","Empty",": " ]
                  }, {
                     "r" : "42",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "41",
                        "s" : [ {
                           "value" : [ "List<" ]
                        }, {
                           "r" : "40",
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
               "localId" : "42",
               "type" : "Length",
               "operand" : {
                  "localId" : "41",
                  "type" : "List"
               }
            }
         }, {
            "localId" : "49",
            "name" : "NullValue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "49",
                  "s" : [ {
                     "value" : [ "","define ","NullValue",": " ]
                  }, {
                     "r" : "48",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "47",
                        "s" : [ {
                           "r" : "44",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "46",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "45",
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
               "localId" : "48",
               "type" : "Length",
               "operand" : {
                  "localId" : "47",
                  "strict" : false,
                  "type" : "As",
                  "operand" : {
                     "localId" : "44",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "localId" : "46",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "45",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "14",
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
            "name" : "FiveInFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","FiveInFive",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "5"," in ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "type" : "In",
               "operand" : [ {
                  "localId" : "2",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "5",
                  "type" : "Literal"
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "3",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "9",
            "name" : "FourInFive",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "// CQL-to-ELM will promote the second 5 to a list via ToList","define ","FourInFive",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "4"," in ","5" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "In",
               "operand" : [ {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               }, {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "14",
            "name" : "LengthOfNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "// CQL-to-ELM will promote the 5 to a list via ToList","define ","LengthOfNull",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "Length","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "null"," as " ]
                        }, {
                           "r" : "11",
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
               "localId" : "13",
               "type" : "Length",
               "operand" : {
                  "type" : "ToList",
                  "operand" : {
                     "localId" : "12",
                     "strict" : false,
                     "type" : "As",
                     "operand" : {
                        "localId" : "10",
                        "type" : "Null"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "11",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "29",
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
            "name" : "Skip2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","Skip2",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "8",
                        "value" : [ ", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "type" : "Slice",
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
               },
               "startIndex" : {
                  "localId" : "8",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "17",
            "name" : "SkipNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","SkipNull",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "r" : "11",
                           "value" : [ "{ ","1",", ","3",", ","5"," }" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "Slice",
               "source" : {
                  "localId" : "14",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "12",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "15",
                     "type" : "Null"
                  }
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "25",
            "name" : "SkipEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","define ","SkipEmpty",": " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "Skip","(" ]
                     }, {
                        "r" : "21",
                        "s" : [ {
                           "r" : "18",
                           "value" : [ "{ ","1",", ","3",", ","5"," }" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "23",
                        "s" : [ {
                           "r" : "22",
                           "value" : [ "-","1" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "24",
               "type" : "Slice",
               "source" : {
                  "localId" : "21",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "20",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "5",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "localId" : "23",
                  "type" : "Negate",
                  "operand" : {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "29",
            "name" : "SkipIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "29",
                  "s" : [ {
                     "value" : [ "","define ","SkipIsNull",": " ]
                  }, {
                     "r" : "28",
                     "s" : [ {
                        "r" : "26",
                        "value" : [ "Skip","(","null",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "28",
               "type" : "Slice",
               "source" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "26",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "startIndex" : {
                  "localId" : "27",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "14",
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
            "name" : "Tail234",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","Tail234",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Tail","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Slice",
               "source" : {
                  "localId" : "6",
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
                  } ]
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "11",
            "name" : "TailEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","TailEmpty",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "9",
                        "value" : [ "Tail","(","{ }",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "Slice",
               "source" : {
                  "localId" : "9",
                  "type" : "List"
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "14",
            "name" : "TailIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","TailIsNull",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "12",
                        "value" : [ "Tail","(","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Slice",
               "source" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "12",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
            "name" : "Take2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Take2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "r" : "2",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "r" : "7",
                        "value" : [ ", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "type" : "Slice",
               "source" : {
                  "localId" : "6",
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
                  } ]
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "7",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "15",
            "name" : "TakeTooMany",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","TakeTooMany",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "r" : "10",
                           "value" : [ "{ ","1",", ","2"," }" ]
                        } ]
                     }, {
                        "r" : "13",
                        "value" : [ ", ","3",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "type" : "Slice",
               "source" : {
                  "localId" : "12",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "10",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "11",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "13",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "23",
            "name" : "TakeEmpty",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "23",
                  "s" : [ {
                     "value" : [ "","define ","TakeEmpty",": " ]
                  }, {
                     "r" : "22",
                     "s" : [ {
                        "value" : [ "Take","(" ]
                     }, {
                        "r" : "20",
                        "s" : [ {
                           "r" : "16",
                           "value" : [ "{ ","1",", ","2",", ","3",", ","4"," }" ]
                        } ]
                     }, {
                        "r" : "21",
                        "value" : [ ", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "22",
               "type" : "Slice",
               "source" : {
                  "localId" : "20",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "16",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  }, {
                     "localId" : "17",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
                     "localId" : "18",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "3",
                     "type" : "Literal"
                  }, {
                     "localId" : "19",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "4",
                     "type" : "Literal"
                  } ]
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "As",
                     "operand" : {
                        "localId" : "21",
                        "type" : "Null"
                     }
                  }, {
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "0",
                     "type" : "Literal"
                  } ]
               }
            }
         }, {
            "localId" : "27",
            "name" : "TakeIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","TakeIsNull",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "r" : "24",
                        "value" : [ "Take","(","null",", ","2",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
               "type" : "Slice",
               "source" : {
                  "type" : "As",
                  "operand" : {
                     "localId" : "24",
                     "type" : "Null"
                  },
                  "asTypeSpecifier" : {
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               },
               "startIndex" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "endIndex" : {
                  "type" : "Coalesce",
                  "operand" : [ {
                     "localId" : "25",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  }, {
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

