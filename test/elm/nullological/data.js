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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "214",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "241",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "Nil",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "r" : "215",
                     "value" : [ "","define ","Nil",": ","null" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Null"
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "One",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "r" : "219",
                     "value" : [ "","define ","One",": ","1" ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "1",
               "type" : "Literal"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","NullIsNull",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "null"," is null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "225",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "223",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","NullVarIsNull",": " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "r" : "229",
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
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "name" : "Nil",
                  "type" : "ExpressionRef"
               }
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "StringIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","StringIsNull",": " ]
                  }, {
                     "r" : "237",
                     "s" : [ {
                        "r" : "235",
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
               "localId" : "237",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "235",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NonNullVarIsNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","NonNullVarIsNull",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "r" : "242",
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
               "localId" : "243",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsNull",
               "signature" : [ {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "242",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "373",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "NullNullHelloNullWorld",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","NullNullHelloNullWorld",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Coalesce","(","null",", ","null",", " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "'Hello'" ]
                        } ]
                     }, {
                        "r" : "219",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "220",
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
               "localId" : "229",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "230",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Hello",
                  "type" : "Literal"
               }, {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "World",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooNullNullBar",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "237",
                  "s" : [ {
                     "value" : [ "","define ","FooNullNullBar",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "238",
                        "s" : [ {
                           "value" : [ "'Foo'" ]
                        } ]
                     }, {
                        "r" : "240",
                        "value" : [ ", ","null",", ","null",", " ]
                     }, {
                        "r" : "242",
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
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "256",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "257",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "258",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Foo",
                  "type" : "Literal"
               }, {
                  "localId" : "253",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "254",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "241",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "242",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Bar",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "261",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "AllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","AllNull",": " ]
                  }, {
                     "r" : "270",
                     "s" : [ {
                        "r" : "262",
                        "value" : [ "Coalesce","(","null",", ","null",", ","null",")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "270",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "272",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "273",
                  "name" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "262",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "263",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               }, {
                  "localId" : "264",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "type" : "Null"
               } ]
            }
         }, {
            "localId" : "276",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ListArgStartsWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "276",
                  "s" : [ {
                     "value" : [ "","define ","ListArgStartsWithNull",": " ]
                  }, {
                     "r" : "294",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "277",
                        "s" : [ {
                           "r" : "278",
                           "value" : [ "List{","null",", ","null",", " ]
                        }, {
                           "r" : "280",
                           "s" : [ {
                              "value" : [ "'One'" ]
                           } ]
                        }, {
                           "r" : "282",
                           "value" : [ ", ","null",", " ]
                        }, {
                           "r" : "283",
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
               "localId" : "294",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "295",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "296",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "288",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "289",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "285",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "278",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "286",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "279",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "280",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "One",
                     "type" : "Literal"
                  }, {
                     "localId" : "287",
                     "asType" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "282",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "Null"
                     }
                  }, {
                     "localId" : "283",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Two",
                     "type" : "Literal"
                  } ]
               } ]
            }
         }, {
            "localId" : "299",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
            "name" : "ListArgAllNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "299",
                  "s" : [ {
                     "value" : [ "","define ","ListArgAllNull",": " ]
                  }, {
                     "r" : "311",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "300",
                        "s" : [ {
                           "r" : "301",
                           "value" : [ "List{","null",", ","null",", ","null",", ","null","}" ]
                        } ]
                     }, {
                        "value" : [ ")" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "311",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "312",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "313",
                     "name" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "300",
                  "type" : "List",
                  "resultTypeSpecifier" : {
                     "localId" : "305",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "306",
                        "name" : "{urn:hl7-org:elm-types:r1}Any",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "element" : [ {
                     "localId" : "301",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "302",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "303",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }, {
                     "localId" : "304",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  } ]
               } ]
            }
         }, {
            "localId" : "316",
            "name" : "ListWithNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "316",
                  "s" : [ {
                     "value" : [ "","define ","ListWithNull",": " ]
                  }, {
                     "r" : "317",
                     "s" : [ {
                        "r" : "318",
                        "value" : [ "List{","null",", ","null",", " ]
                     }, {
                        "r" : "320",
                        "s" : [ {
                           "value" : [ "'One'" ]
                        } ]
                     }, {
                        "r" : "322",
                        "value" : [ ", ","null",", " ]
                     }, {
                        "r" : "323",
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
               "localId" : "330",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "331",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "317",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "328",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "329",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "325",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "318",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "326",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "319",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "320",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "One",
                  "type" : "Literal"
               }, {
                  "localId" : "327",
                  "asType" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "322",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "323",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "Two",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "334",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "ListExpressionRef",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "334",
                  "s" : [ {
                     "value" : [ "","define ","ListExpressionRef",": " ]
                  }, {
                     "r" : "342",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "335",
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
               "localId" : "342",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "343",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "344",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "335",
                  "name" : "ListWithNull",
                  "type" : "ExpressionRef",
                  "resultTypeSpecifier" : {
                     "localId" : "336",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "337",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "347",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
            "name" : "RetrieveAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "347",
                  "s" : [ {
                     "value" : [ "","define ","RetrieveAsList",": " ]
                  }, {
                     "r" : "355",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "348",
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
               "localId" : "355",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
               "type" : "Coalesce",
               "signature" : [ {
                  "localId" : "356",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "357",
                     "name" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "348",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Encounter",
                  "type" : "Retrieve",
                  "resultTypeSpecifier" : {
                     "localId" : "349",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "350",
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
            "localId" : "360",
            "name" : "ListA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "360",
                  "s" : [ {
                     "value" : [ "","define ","ListA",": " ]
                  }, {
                     "r" : "361",
                     "s" : [ {
                        "r" : "362",
                        "value" : [ "List{","null",", ","null",", ","3","}" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "369",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "370",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "361",
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
                  "localId" : "365",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "362",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "366",
                  "asType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "363",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "364",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "3",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "373",
            "name" : "UnionAsList",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "373",
                  "s" : [ {
                     "value" : [ "","define ","UnionAsList",": " ]
                  }, {
                     "r" : "409",
                     "s" : [ {
                        "value" : [ "Coalesce","(" ]
                     }, {
                        "r" : "390",
                        "s" : [ {
                           "r" : "374",
                           "s" : [ {
                              "value" : [ "ListA" ]
                           } ]
                        }, {
                           "value" : [ " union " ]
                        }, {
                           "r" : "377",
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
               "localId" : "417",
               "type" : "ChoiceTypeSpecifier",
               "choice" : [ {
                  "localId" : "418",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "419",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               } ]
            },
            "expression" : {
               "localId" : "409",
               "type" : "Coalesce",
               "resultTypeSpecifier" : {
                  "localId" : "414",
                  "type" : "ChoiceTypeSpecifier",
                  "choice" : [ {
                     "localId" : "415",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }, {
                     "localId" : "416",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  } ]
               },
               "signature" : [ {
                  "localId" : "410",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "411",
                     "type" : "ChoiceTypeSpecifier",
                     "choice" : [ {
                        "localId" : "412",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "413",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     } ]
                  }
               } ],
               "operand" : [ {
                  "localId" : "390",
                  "type" : "Union",
                  "resultTypeSpecifier" : {
                     "localId" : "399",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "400",
                        "type" : "ChoiceTypeSpecifier",
                        "choice" : [ {
                           "localId" : "401",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "402",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
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
                  }, {
                     "localId" : "395",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "396",
                        "type" : "ChoiceTypeSpecifier",
                        "choice" : [ {
                           "localId" : "397",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }, {
                           "localId" : "398",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        } ]
                     }
                  } ],
                  "operand" : [ {
                     "localId" : "380",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "374",
                        "name" : "ListA",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "375",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "376",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "localId" : "381",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "382",
                           "type" : "ChoiceTypeSpecifier",
                           "choice" : [ {
                              "localId" : "383",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "384",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           } ]
                        }
                     }
                  }, {
                     "localId" : "385",
                     "type" : "As",
                     "signature" : [ ],
                     "operand" : {
                        "localId" : "377",
                        "name" : "ListWithNull",
                        "type" : "ExpressionRef",
                        "resultTypeSpecifier" : {
                           "localId" : "378",
                           "type" : "ListTypeSpecifier",
                           "elementType" : {
                              "localId" : "379",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }
                     },
                     "asTypeSpecifier" : {
                        "localId" : "386",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "387",
                           "type" : "ChoiceTypeSpecifier",
                           "choice" : [ {
                              "localId" : "388",
                              "name" : "{urn:hl7-org:elm-types:r1}Integer",
                              "type" : "NamedTypeSpecifier"
                           }, {
                              "localId" : "389",
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

