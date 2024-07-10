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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "212",
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
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
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
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "r" : "213",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "type" : "Null"
            }
         }, {
            "localId" : "215",
            "name" : "One",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "215",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","define ","One",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "216",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "name" : "NullIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","NullIsNull",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "null"," is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "type" : "IsNull",
               "signature" : [ ],
               "operand" : {
                  "localId" : "219",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "222",
            "name" : "NullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","NullVarIsNull",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "223",
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
               "localId" : "224",
               "type" : "IsNull",
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "name" : "Nil",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "226",
            "name" : "StringIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","StringIsNull",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "r" : "227",
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
               "localId" : "228",
               "type" : "IsNull",
               "signature" : [ ],
               "operand" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "230",
            "name" : "NonNullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","NonNullVarIsNull",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "r" : "231",
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
               "localId" : "232",
               "type" : "IsNull",
               "signature" : [ ],
               "operand" : {
                  "localId" : "231",
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
      "localId" : "0",
      "annotation" : [ {
         "translatorVersion" : "3.12.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "signatureLevel" : "None",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "298",
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
            "name" : "NullNullHelloNullWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NullNullHelloNullWorld",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "Coalesce","(","null",", ","null",", " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "216",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "217",
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
               "localId" : "220",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "213",
                  "type" : "Null"
               }, {
                  "localId" : "214",
                  "type" : "Null"
               }, {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "type" : "Null"
               }, {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "222",
            "name" : "FooNullNullBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","FooNullNullBar",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "223",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "224",
                        "value" : [ ", ","null",", ","null",", " ]
                     }, {
                        "r" : "226",
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
               "localId" : "231",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "223",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "232",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "224",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "233",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "225",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "226",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "235",
            "name" : "AllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","AllNull",": " ]
                  }, {
                     "r" : "241",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "Coalesce","(","null",", ","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "241",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "236",
                  "type" : "Null"
               }, {
                  "localId" : "237",
                  "type" : "Null"
               }, {
                  "localId" : "238",
                  "type" : "Null"
               } ]
            }
         }, {
            "localId" : "243",
            "name" : "ListArgStartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","ListArgStartsWithNull",": " ]
                  }, {
                     "r" : "255",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "244",
                        "s" : [ {
                           "r" : "245",
                           "value" : [ "List{","null",", ","null",", " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "'One'" ]
                           } ]
                        }, {
                           "r" : "248",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "249",
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
               "localId" : "255",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "244",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "250",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "245",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "251",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "246",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "247",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "One",
                     "type" : "Literal"
                  }, {
                     "localId" : "252",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "248",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "249",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Two",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "257",
            "name" : "ListArgAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "257",
                  "s" : [ {
                     "value" : [ "","define ","ListArgAllNull",": " ]
                  }, {
                     "r" : "265",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "258",
                        "s" : [ {
                           "r" : "259",
                           "value" : [ "List{","null",", ","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "265",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "258",
                  "type" : "List",
                  "element" : [ {
                     "localId" : "259",
                     "type" : "Null"
                  }, {
                     "localId" : "260",
                     "type" : "Null"
                  }, {
                     "localId" : "261",
                     "type" : "Null"
                  }, {
                     "localId" : "262",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "267",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "268",
                     "s" : [ {
                        "r" : "269",
                        "value" : [ "List{","null",", ","null",", " ]
                     }, {
                        "r" : "271",
                        "s" : [ {
                           "value" : [ "'One'" ]
                        } ]
                     }, {
                        "r" : "272",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "273",
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
               "localId" : "268",
               "type" : "List",
               "element" : [ {
                  "localId" : "274",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "269",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "275",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "270",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "271",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "One",
                  "type" : "Literal"
               }, {
                  "localId" : "276",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "272",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "273",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Two",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "278",
            "name" : "ListExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "278",
                  "s" : [ {
                     "value" : [ "","define ","ListExpressionRef",": " ]
                  }, {
                     "r" : "282",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "279",
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
               "localId" : "282",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "279",
                  "name" : "ListWithNull",
                  "type" : "ExpressionRef"
               } ]
            }
         }, {
            "localId" : "284",
            "name" : "RetrieveAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "284",
                  "s" : [ {
                     "value" : [ "","define ","RetrieveAsList",": " ]
                  }, {
                     "r" : "288",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "285",
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
               "localId" : "288",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "285",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               } ]
            }
         }, {
            "localId" : "290",
            "name" : "ListA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "290",
                  "s" : [ {
                     "value" : [ "","define ","ListA",": " ]
                  }, {
                     "r" : "291",
                     "s" : [ {
                        "r" : "292",
                        "value" : [ "List{","null",", ","null",", ","3","}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "291",
               "type" : "List",
               "element" : [ {
                  "localId" : "295",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "292",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "296",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "293",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "294",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "298",
            "name" : "UnionAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "298",
                  "s" : [ {
                     "value" : [ "","define ","UnionAsList",": " ]
                  }, {
                     "r" : "314",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "311",
                        "s" : [ {
                           "r" : "299",
                           "s" : [ {
                              "value" : [ "ListA" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "300",
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
               "localId" : "314",
               "type" : "Coalesce",
               "signature" : [ ],
               "operand" : [ {
                  "localId" : "311",
                  "type" : "Union",
                  "signature" : [ ],
                  "operand" : [ {
                     "localId" : "301",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "299",
                        "name" : "ListA",
                        "type" : "ExpressionRef"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "302",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "303",
                           "type" : "ChoiceTypeSpecifier",
                           "type" : [ ],
                           "choice" : [ {
                              "localId" : "304",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "305",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ]
                        }
                     }
                  }, {
                     "localId" : "306",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "300",
                        "name" : "ListWithNull",
                        "type" : "ExpressionRef"
                     },
                     "asTypeSpecifier" : {
                        "localId" : "307",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "308",
                           "type" : "ChoiceTypeSpecifier",
                           "type" : [ ],
                           "choice" : [ {
                              "localId" : "309",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "310",
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

