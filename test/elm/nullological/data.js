/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Nil
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Nil: null
*/

module.exports['Nil'] = {
   "library" : {
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "3",
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
            "localId" : "3",
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "type" : "Null"
            }
         } ]
      }
   }
}

/* IsNull
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Nil: null
define One: 1
define NullIsNull: null is null
define NullVarIsNull: Nil is null
define StringIsNull: '' is null
define NonNullVarIsNull: One is null
*/

module.exports['IsNull'] = {
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
            "localId" : "3",
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "2",
               "type" : "Null"
            }
         }, {
            "localId" : "5",
            "name" : "One",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","define ","One",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "8",
            "name" : "NullIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","NullIsNull",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "6",
                        "value" : [ "null"," is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "IsNull",
               "operand" : {
                  "localId" : "6",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "11",
            "name" : "NullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","NullVarIsNull",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "Nil" ]
                        } ]
                     }, {
                        "value" : [ " is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "type" : "IsNull",
               "operand" : {
                  "localId" : "9",
                  "name" : "Nil",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "14",
            "name" : "StringIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","StringIsNull",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "''" ]
                        } ]
                     }, {
                        "value" : [ " is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "IsNull",
               "operand" : {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "17",
            "name" : "NonNullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "17",
                  "s" : [ {
                     "value" : [ "","define ","NonNullVarIsNull",": " ]
                  }, {
                     "r" : "16",
                     "s" : [ {
                        "r" : "15",
                        "s" : [ {
                           "value" : [ "One" ]
                        } ]
                     }, {
                        "value" : [ " is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "16",
               "type" : "IsNull",
               "operand" : {
                  "localId" : "15",
                  "name" : "One",
                  "type" : "ExpressionRef"
               }
            }
         } ]
      }
   }
}

/* Coalesce
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NullNullHelloNullWorld: Coalesce(null, null, 'Hello', null, 'World')
define FooNullNullBar: Coalesce('Foo', null, null, 'Bar')
define AllNull: Coalesce(null, null, null)
define ListArgStartsWithNull: Coalesce(List{null, null, 'One', null, 'Two'})
define ListArgAllNull: Coalesce(List{null, null, null, null})
define ListWithNull: List{null, null, 'One', null, 'Two'}
define ListExpressionRef: Coalesce(ListWithNull)
define RetrieveAsList: Coalesce([Encounter])
define ListA: List{null, null, 3}
define UnionAsList: Coalesce(ListA union ListWithNull)
*/

module.exports['Coalesce'] = {
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
            "localId" : "8",
            "name" : "NullNullHelloNullWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","define ","NullNullHelloNullWorld",": " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "2",
                        "value" : [ "Coalesce","(","null",", ","null",", " ]
                     }, {
                        "r" : "4",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "5",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'World'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "7",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "2",
                  "type" : "Null"
               }, {
                  "localId" : "3",
                  "type" : "Null"
               }, {
                  "localId" : "4",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "5",
                  "type" : "Null"
               }, {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "14",
            "name" : "FooNullNullBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "14",
                  "s" : [ {
                     "value" : [ "","define ","FooNullNullBar",": " ]
                  }, {
                     "r" : "13",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "9",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "10",
                        "value" : [ ", ","null",", ","null",", " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "'Bar'" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "13",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "9",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "10",
                     "type" : "Null"
                  }
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "11",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "12",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "19",
            "name" : "AllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "19",
                  "s" : [ {
                     "value" : [ "","define ","AllNull",": " ]
                  }, {
                     "r" : "18",
                     "s" : [ {
                        "r" : "15",
                        "value" : [ "Coalesce","(","null",", ","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "18",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "15",
                  "type" : "Null"
               }, {
                  "localId" : "16",
                  "type" : "Null"
               }, {
                  "localId" : "17",
                  "type" : "Null"
               } ]
            }
         }, {
            "localId" : "27",
            "name" : "ListArgStartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","ListArgStartsWithNull",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "25",
                        "s" : [ {
                           "r" : "20",
                           "value" : [ "List{","null",", ","null",", " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "'One'" ]
                           } ]
                        }, {
                           "r" : "23",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "24",
                           "s" : [ {
                              "value" : [ "'Two'" ]
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
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "25",
                  "type" : "List",
                  "element" : [ {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "localId" : "20",
                        "type" : "Null"
                     }
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "localId" : "21",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "22",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "One",
                     "type" : "Literal"
                  }, {
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "operand" : {
                        "localId" : "23",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "24",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Two",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "34",
            "name" : "ListArgAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "34",
                  "s" : [ {
                     "value" : [ "","define ","ListArgAllNull",": " ]
                  }, {
                     "r" : "33",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "32",
                        "s" : [ {
                           "r" : "28",
                           "value" : [ "List{","null",", ","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "33",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "32",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "28",
                     "type" : "Null"
                  }, {
                     "localId" : "29",
                     "type" : "Null"
                  }, {
                     "localId" : "30",
                     "type" : "Null"
                  }, {
                     "localId" : "31",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "41",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "41",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "40",
                     "s" : [ {
                        "r" : "35",
                        "value" : [ "List{","null",", ","null",", " ]
                     }, {
                        "r" : "37",
                        "s" : [ {
                           "value" : [ "'One'" ]
                        } ]
                     }, {
                        "r" : "38",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "39",
                        "s" : [ {
                           "value" : [ "'Two'" ]
                        } ]
                     }, {
                        "value" : [ "}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "40",
               "type" : "List",
               "element" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "35",
                     "type" : "Null"
                  }
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "36",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "37",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "One",
                  "type" : "Literal"
               }, {
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "operand" : {
                     "localId" : "38",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "39",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Two",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "44",
            "name" : "ListExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "44",
                  "s" : [ {
                     "value" : [ "","define ","ListExpressionRef",": " ]
                  }, {
                     "r" : "43",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "42",
                        "s" : [ {
                           "value" : [ "ListWithNull" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "43",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "42",
                  "name" : "ListWithNull",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "47",
            "name" : "RetrieveAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "47",
                  "s" : [ {
                     "value" : [ "","define ","RetrieveAsList",": " ]
                  }, {
                     "r" : "46",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "45",
                        "s" : [ {
                           "value" : [ "[","Encounter","]" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "46",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "45",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "Retrieve"
               } ]
            }
         }, {
            "localId" : "52",
            "name" : "ListA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "52",
                  "s" : [ {
                     "value" : [ "","define ","ListA",": " ]
                  }, {
                     "r" : "51",
                     "s" : [ {
                        "r" : "48",
                        "value" : [ "List{","null",", ","null",", ","3","}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "51",
               "type" : "List",
               "element" : [ {
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "operand" : {
                     "localId" : "48",
                     "type" : "Null"
                  }
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
            }
         }, {
            "localId" : "57",
            "name" : "UnionAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "57",
                  "s" : [ {
                     "value" : [ "","define ","UnionAsList",": " ]
                  }, {
                     "r" : "56",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "55",
                        "s" : [ {
                           "r" : "53",
                           "s" : [ {
                              "value" : [ "ListA" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "54",
                           "s" : [ {
                              "value" : [ "ListWithNull" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "56",
               "type" : "Coalesce",
               "operand" : [ {
                  "localId" : "55",
                  "type" : "Union",
                  "operand" : [ {
                     "type" : "As",
                     "operand" : {
                        "localId" : "53",
                        "name" : "ListA",
                        "type" : "ExpressionRef"
                     },
                     "asTypeSpecifier" : {
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "type" : "ChoiceTypeSpecifier",
                           "choice" : [ {
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ]
                        }
                     }
                  }, {
                     "type" : "As",
                     "operand" : {
                        "localId" : "54",
                        "name" : "ListWithNull",
                        "type" : "ExpressionRef"
                     },
                     "asTypeSpecifier" : {
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "type" : "ChoiceTypeSpecifier",
                           "choice" : [ {
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ]
                        }
                     }
                  } ]
               } ]
            }
         } ]
      }
   }
}

