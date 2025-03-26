/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* ParameterDef
library TestSnippet version '1'
using Simple version '1.0.0'
parameter MeasureYear default 2012
parameter IntParameter Integer
parameter ListParameter List<String>
parameter TupleParameter Tuple{a Integer, b String, c Boolean, d List<Integer>, e Tuple{ f String, g Boolean}}
context Patient
define foo: 'bar'
*/

module.exports['ParameterDef'] = {
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MeasureYear",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "r" : "208",
                     "value" : [ "","parameter ","MeasureYear"," default ","2012" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2012",
               "type" : "Literal"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","parameter ","IntParameter"," " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "name" : "ListParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","ListParameter"," " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "213",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "216",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "212",
               "type" : "ListTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "214",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "215",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "elementType" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "218",
            "name" : "TupleParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","parameter ","TupleParameter"," " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Tuple{" ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "a"," " ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "222",
                        "s" : [ {
                           "value" : [ "b"," " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "c"," " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "Boolean" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "d"," " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "228",
                              "s" : [ {
                                 "value" : [ "Integer" ]
                              } ]
                           }, {
                              "value" : [ ">" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "e"," " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "f"," " ]
                              }, {
                                 "r" : "234",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "235",
                              "s" : [ {
                                 "value" : [ "g"," " ]
                              }, {
                                 "r" : "236",
                                 "s" : [ {
                                    "value" : [ "Boolean" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ "}" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "}" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "258",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "259",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "260",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "261",
                  "name" : "b",
                  "elementType" : {
                     "localId" : "262",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "263",
                  "name" : "c",
                  "elementType" : {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "265",
                  "name" : "d",
                  "elementType" : {
                     "localId" : "266",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "267",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "268",
                  "name" : "e",
                  "elementType" : {
                     "localId" : "269",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "270",
                        "name" : "f",
                        "elementType" : {
                           "localId" : "271",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "272",
                        "name" : "g",
                        "elementType" : {
                           "localId" : "273",
                           "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            },
            "parameterTypeSpecifier" : {
               "localId" : "219",
               "type" : "TupleTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "242",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "243",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "245",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "247",
                     "name" : "c",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "249",
                     "name" : "d",
                     "elementType" : {
                        "localId" : "250",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "251",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "252",
                     "name" : "e",
                     "elementType" : {
                        "localId" : "253",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "254",
                           "name" : "f",
                           "elementType" : {
                              "localId" : "255",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "256",
                           "name" : "g",
                           "elementType" : {
                              "localId" : "257",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               },
               "element" : [ {
                  "localId" : "220",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "222",
                  "name" : "b",
                  "elementType" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "224",
                  "name" : "c",
                  "elementType" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "226",
                  "name" : "d",
                  "elementType" : {
                     "localId" : "227",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "229",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "230",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "228",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "231",
                  "name" : "e",
                  "elementType" : {
                     "localId" : "232",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "237",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "238",
                           "name" : "f",
                           "elementType" : {
                              "localId" : "239",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "240",
                           "name" : "g",
                           "elementType" : {
                              "localId" : "241",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "localId" : "233",
                        "name" : "f",
                        "elementType" : {
                           "localId" : "234",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "235",
                        "name" : "g",
                        "elementType" : {
                           "localId" : "236",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "277",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "275",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "276",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "274",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "279",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "279",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "280",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "280",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "bar",
               "type" : "Literal"
            }
         } ]
      }
   }
}

/* ParameterRef
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP default 'Bar'
context Patient
define Foo: FooP
*/

module.exports['ParameterRef'] = {
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," default " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "210",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "211",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "209",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* BooleanParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Boolean
parameter FooDP default true
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['BooleanParameterTypes'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Boolean" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooDP"," default ","true" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* DecimalParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Decimal
parameter FooDP default 1.5
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['DecimalParameterTypes'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Decimal" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooDP"," default ","1.5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "1.5",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* IntegerParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Integer
parameter FooDP default 2
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['IntegerParameterTypes'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooDP"," default ","2" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* StringParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP String
parameter FooDP default 'Hello'
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['StringParameterTypes'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "String" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* CodeParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "FOOTESTCS": 'http://footest.org'
parameter FooP Code
parameter FooDP default Code 'FooTest' from "FOOTESTCS" display 'Foo Test'
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['CodeParameterTypes'] = {
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
            "r" : "221",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "Code" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "{urn:hl7-org:elm-types:r1}Code",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "Code ","'FooTest'"," from " ]
                     }, {
                        "r" : "212",
                        "s" : [ {
                           "value" : [ "\"FOOTESTCS\"" ]
                        } ]
                     }, {
                        "value" : [ " display ","'Foo Test'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "code" : "FooTest",
               "display" : "Foo Test",
               "type" : "Code",
               "system" : {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                  "name" : "FOOTESTCS"
               }
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "216",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "215",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "213",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* ConceptParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "FOOTESTCS": 'http://footest.org'
parameter FooP Concept
parameter FooDP default Concept { Code 'FooTest' from "FOOTESTCS" } display 'Foo Test'
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['ConceptParameterTypes'] = {
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
            "r" : "222",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "Concept" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "Concept { " ]
                     }, {
                        "r" : "212",
                        "s" : [ {
                           "value" : [ "Code ","'FooTest'"," from " ]
                        }, {
                           "r" : "213",
                           "s" : [ {
                              "value" : [ "\"FOOTESTCS\"" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " } display ","'Foo Test'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "display" : "Foo Test",
               "type" : "Concept",
               "code" : [ {
                  "localId" : "212",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "code" : "FooTest",
                  "system" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "name" : "FOOTESTCS"
                  }
               } ]
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "216",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* DateTimeParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP DateTime
parameter FooDP default @2012-04-01T12:11:10
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['DateTimeParameterTypes'] = {
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
            "r" : "225",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "DateTime" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "name" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01T12:11:10" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "211",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "212",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "hour" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "216",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "220",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "218",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "219",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "217",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "226",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* DateParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Date
parameter FooDP default @2012-04-01
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['DateParameterTypes'] = {
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
            "r" : "223",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Date" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "name" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "214",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "211",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "212",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "218",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "216",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "217",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "215",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "220",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "221",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* QuantityParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Quantity
parameter FooDP default 10 'dL'
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['QuantityParameterTypes'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Quantity" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "name" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "10 ","'dL'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "value" : 10,
               "unit" : "dL",
               "type" : "Quantity"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* TimeParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Time
parameter FooDP default @T12:00:00
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['TimeParameterTypes'] = {
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
            "r" : "222",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Time" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "name" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooDP"," default ","@T12:00:00" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "211",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "212",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "216",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "name" : "FooDP",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* ListParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP List<String>
parameter FooDP default { 'a', 'b', 'c' }
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['ListParameterTypes'] = {
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
            "r" : "235",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "209",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "212",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "213",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "type" : "ListTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "210",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "211",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "elementType" : {
                  "localId" : "209",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "214",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "'b'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "'c'" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "221",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "222",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "215",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "219",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }, {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "b",
                  "type" : "Literal"
               }, {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "c",
                  "type" : "Literal"
               } ]
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "226",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "224",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "225",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "223",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "228",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "232",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "233",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "229",
               "name" : "FooP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "230",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "231",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "235",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "239",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "240",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "236",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "237",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* IntervalParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Interval<Integer>
parameter FooDP default Interval[2,6]
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['IntervalParameterTypes'] = {
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
            "r" : "234",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "209",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "212",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "213",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "type" : "IntervalTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "210",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "211",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "pointType" : {
                  "localId" : "209",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "214",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "r" : "215",
                        "value" : [ "Interval[","2",",","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "220",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "217",
               "lowClosed" : true,
               "highClosed" : true,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "218",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "219",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "high" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "225",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "224",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "222",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "227",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "231",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "228",
               "name" : "FooP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "229",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "230",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "234",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "238",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "235",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "236",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "237",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         } ]
      }
   }
}

/* TupleParameterTypes
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooP Tuple { Hello String, MeaningOfLife Integer }
parameter FooDP default Tuple { Hello: 'Universe', MeaningOfLife: 24 }
context Patient
define Foo: FooP
define Foo2: FooDP
*/

module.exports['TupleParameterTypes'] = {
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
            "r" : "255",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Tuple { " ]
                     }, {
                        "r" : "209",
                        "s" : [ {
                           "value" : [ "Hello"," " ]
                        }, {
                           "r" : "210",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "211",
                        "s" : [ {
                           "value" : [ "MeaningOfLife"," " ]
                        }, {
                           "r" : "212",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "218",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "219",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "220",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "221",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "type" : "TupleTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "213",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "214",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "215",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "216",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "217",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "localId" : "209",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "210",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "211",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "212",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "223",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "Tuple { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Hello",": " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "'Universe'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "r" : "226",
                           "value" : [ "MeaningOfLife",": ","24" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "232",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "233",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "235",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "236",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "default" : {
               "localId" : "224",
               "type" : "Tuple",
               "resultTypeSpecifier" : {
                  "localId" : "227",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "228",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "229",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "230",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "name" : "Hello",
                  "value" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Universe",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "MeaningOfLife",
                  "value" : {
                     "localId" : "226",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "24",
                     "type" : "Literal"
                  }
               } ]
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "240",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "238",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "239",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "237",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "242",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "242",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "243",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "249",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "250",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "251",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "252",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "253",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "243",
               "name" : "FooP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "244",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "245",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "247",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               }
            }
         }, {
            "localId" : "255",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "255",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "256",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "262",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "263",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "264",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "265",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "266",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "256",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "257",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "258",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "259",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "260",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "261",
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

/* DefaultAndNoDefault
library TestSnippet version '1'
using Simple version '1.0.0'
parameter FooWithNoDefault Integer
parameter FooWithDefault default 5
context Patient
define Foo: FooWithNoDefault
define Foo2: FooWithDefault
*/

module.exports['DefaultAndNoDefault'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooWithNoDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","FooWithNoDefault"," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooWithDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "r" : "210",
                     "value" : [ "","parameter ","FooWithDefault"," default ","5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "214",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "212",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "213",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "211",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "FooWithNoDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "217",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooWithNoDefault",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "value" : [ "FooWithDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooWithDefault",
               "type" : "ParameterRef"
            }
         } ]
      }
   }
}

/* MeasurementPeriodParameter
library TestSnippet version '1'
using Simple version '1.0.0'
parameter "Measurement Period" Interval<DateTime>
context Patient
define MeasurementPeriod: Interval[DateTime(2011, 1, 1), DateTime(2013, 1, 1)] overlaps "Measurement Period"
*/

module.exports['MeasurementPeriodParameter'] = {
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
            "r" : "219",
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
      "parameters" : {
         "def" : [ {
            "localId" : "207",
            "name" : "Measurement Period",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","\"Measurement Period\""," " ]
                  }, {
                     "r" : "208",
                     "s" : [ {
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "209",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "212",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "213",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "208",
               "type" : "IntervalTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "210",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "211",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "pointType" : {
                  "localId" : "209",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "216",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "214",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MeasurementPeriod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","MeasurementPeriod",": " ]
                  }, {
                     "r" : "250",
                     "s" : [ {
                        "r" : "244",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "228",
                           "s" : [ {
                              "r" : "220",
                              "value" : [ "DateTime","(","2011",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "r" : "232",
                              "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ "]" ]
                        } ]
                     }, {
                        "r" : "250",
                        "value" : [ " ","overlaps"," " ]
                     }, {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "\"Measurement Period\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "250",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Overlaps",
               "signature" : [ {
                  "localId" : "251",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "252",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "253",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "254",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "244",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "245",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "228",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "229",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "230",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "231",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "220",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2011",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "221",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  },
                  "high" : {
                     "localId" : "240",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "241",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "242",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "243",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "233",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "234",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "247",
                  "name" : "Measurement Period",
                  "type" : "ParameterRef",
                  "resultTypeSpecifier" : {
                     "localId" : "248",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "249",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               } ]
            }
         } ]
      }
   }
}

