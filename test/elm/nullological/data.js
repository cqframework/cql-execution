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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
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
         "translatorVersion" : "3.22.0",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Null"
            }
         }, {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","NullVarIsNull",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "r" : "224",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "224",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Nil",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","StringIsNull",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "229",
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
               "localId" : "230",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "229",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NonNullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "233",
                  "s" : [ {
                     "value" : [ "","define ","NonNullVarIsNull",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "234",
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
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "234",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
         "translatorVersion" : "3.22.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "354",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
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
                     "r" : "225",
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
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "227",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "229",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "232",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooNullNullBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "232",
                  "s" : [ {
                     "value" : [ "","define ","FooNullNullBar",": " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "233",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "234",
                        "value" : [ ", ","null",", ","null",", " ]
                     }, {
                        "r" : "236",
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
               "localId" : "245",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "249",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "250",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "251",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "233",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "246",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "234",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "247",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "235",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "AllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "253",
                  "s" : [ {
                     "value" : [ "","define ","AllNull",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "r" : "254",
                        "value" : [ "Coalesce","(","null",", ","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "262",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "264",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "265",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "254",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "255",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "256",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               } ]
            }
         }, {
            "localId" : "267",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ListArgStartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "267",
                  "s" : [ {
                     "value" : [ "","define ","ListArgStartsWithNull",": " ]
                  }, {
                     "r" : "283",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
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
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "283",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "284",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "285",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "268",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "277",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "278",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "274",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "269",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "275",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "270",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "271",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "273",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Two",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "ListArgAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "287",
                  "s" : [ {
                     "value" : [ "","define ","ListArgAllNull",": " ]
                  }, {
                     "r" : "299",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "288",
                        "s" : [ {
                           "r" : "289",
                           "value" : [ "List{","null",", ","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "299",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "300",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "301",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "288",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "293",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "294",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "289",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "290",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "291",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "292",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "303",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "303",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "304",
                     "s" : [ {
                        "r" : "305",
                        "value" : [ "List{","null",", ","null",", " ]
                     }, {
                        "r" : "307",
                        "s" : [ {
                           "value" : [ "'One'" ]
                        } ]
                     }, {
                        "r" : "308",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "309",
                        "s" : [ {
                           "value" : [ "'Two'" ]
                        } ]
                     }, {
                        "value" : [ "}" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "315",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "316",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "304",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "313",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "314",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "310",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "305",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "311",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "306",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "307",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "One",
                  "type" : "Literal"
               }, {
                  "localId" : "312",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "308",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "309",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Two",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ListExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "318",
                  "s" : [ {
                     "value" : [ "","define ","ListExpressionRef",": " ]
                  }, {
                     "r" : "326",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "319",
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
               "localId" : "326",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "327",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "328",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "319",
                  "name" : "ListWithNull",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
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
         }, {
            "localId" : "330",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "RetrieveAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "330",
                  "s" : [ {
                     "value" : [ "","define ","RetrieveAsList",": " ]
                  }, {
                     "r" : "338",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "331",
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
               "localId" : "338",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "339",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "340",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "331",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "Retrieve",
                  "resultTypeSpecifier" : {
                     "localId" : "332",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "333",
                        "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               } ]
            }
         }, {
            "localId" : "342",
            "name" : "ListA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "342",
                  "s" : [ {
                     "value" : [ "","define ","ListA",": " ]
                  }, {
                     "r" : "343",
                     "s" : [ {
                        "r" : "344",
                        "value" : [ "List{","null",", ","null",", ","3","}" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "351",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "352",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "343",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "349",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "350",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "347",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "344",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "348",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "345",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "346",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "354",
            "name" : "UnionAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "354",
                  "s" : [ {
                     "value" : [ "","define ","UnionAsList",": " ]
                  }, {
                     "r" : "390",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "371",
                        "s" : [ {
                           "r" : "355",
                           "s" : [ {
                              "value" : [ "ListA" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "358",
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
            "resultTypeSpecifier" : {
               "localId" : "398",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "399",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "400",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "390",
               "type" : "Coalesce",
               "resultTypeSpecifier" : {
                  "localId" : "395",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "396",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "397",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ {
                  "localId" : "391",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "392",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "393",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "394",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  }
               } ],
               "operand" : [ {
                  "localId" : "371",
                  "type" : "Union",
                  "resultTypeSpecifier" : {
                     "localId" : "380",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "381",
                        "type" : "ChoiceTypeSpecifier",
                        "choice" : [ {
                           "localId" : "382",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "383",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  },
                  "signature" : [ {
                     "localId" : "372",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "373",
                        "type" : "ChoiceTypeSpecifier",
                        "choice" : [ {
                           "localId" : "374",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "375",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  }, {
                     "localId" : "376",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "377",
                        "type" : "ChoiceTypeSpecifier",
                        "choice" : [ {
                           "localId" : "378",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "379",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "361",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "355",
                        "name" : "ListA",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "356",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "357",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "localId" : "362",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
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
                        }
                     }
                  }, {
                     "localId" : "366",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "358",
                        "name" : "ListWithNull",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "359",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "360",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "localId" : "367",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "368",
                           "type" : "ChoiceTypeSpecifier",
                           "choice" : [ {
                              "localId" : "369",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "370",
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

