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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "285",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "MeasureYear",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "r" : "209",
                     "value" : [ "","parameter ","MeasureYear"," default ","2012" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2012",
               "type" : "Literal"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "IntParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","IntParameter"," " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "214",
            "name" : "ListParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","parameter ","ListParameter"," " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "216",
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
               "localId" : "220",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "221",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "215",
               "type" : "ListTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "217",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "218",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "elementType" : {
                  "localId" : "216",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "222",
            "name" : "TupleParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","parameter ","TupleParameter"," " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "value" : [ "Tuple{" ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "value" : [ "a"," " ]
                        }, {
                           "r" : "225",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "226",
                        "s" : [ {
                           "value" : [ "b"," " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "228",
                        "s" : [ {
                           "value" : [ "c"," " ]
                        }, {
                           "r" : "229",
                           "s" : [ {
                              "value" : [ "Boolean" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "230",
                        "s" : [ {
                           "value" : [ "d"," " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "232",
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
                        "r" : "235",
                        "s" : [ {
                           "value" : [ "e"," " ]
                        }, {
                           "r" : "236",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "r" : "237",
                              "s" : [ {
                                 "value" : [ "f"," " ]
                              }, {
                                 "r" : "238",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "g"," " ]
                              }, {
                                 "r" : "240",
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
               "localId" : "263",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "264",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "265",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "266",
                  "name" : "b",
                  "elementType" : {
                     "localId" : "267",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "268",
                  "name" : "c",
                  "elementType" : {
                     "localId" : "269",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "270",
                  "name" : "d",
                  "elementType" : {
                     "localId" : "271",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "272",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "273",
                  "name" : "e",
                  "elementType" : {
                     "localId" : "274",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "275",
                        "name" : "f",
                        "elementType" : {
                           "localId" : "276",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "277",
                        "name" : "g",
                        "elementType" : {
                           "localId" : "278",
                           "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                           "type" : "NamedTypeSpecifier"
                        }
                     } ]
                  }
               } ]
            },
            "parameterTypeSpecifier" : {
               "localId" : "223",
               "type" : "TupleTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "246",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "247",
                     "name" : "a",
                     "elementType" : {
                        "localId" : "248",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "249",
                     "name" : "b",
                     "elementType" : {
                        "localId" : "250",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "251",
                     "name" : "c",
                     "elementType" : {
                        "localId" : "252",
                        "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "253",
                     "name" : "d",
                     "elementType" : {
                        "localId" : "254",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "255",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     }
                  }, {
                     "localId" : "256",
                     "name" : "e",
                     "elementType" : {
                        "localId" : "257",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "258",
                           "name" : "f",
                           "elementType" : {
                              "localId" : "259",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "260",
                           "name" : "g",
                           "elementType" : {
                              "localId" : "261",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     }
                  } ]
               },
               "element" : [ {
                  "localId" : "224",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "225",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "226",
                  "name" : "b",
                  "elementType" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "228",
                  "name" : "c",
                  "elementType" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "230",
                  "name" : "d",
                  "elementType" : {
                     "localId" : "231",
                     "type" : "ListTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "233",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "234",
                           "name" : "{urn:hl7-org:elm-types:r1}Integer",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "elementType" : {
                        "localId" : "232",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "235",
                  "name" : "e",
                  "elementType" : {
                     "localId" : "236",
                     "type" : "TupleTypeSpecifier",
                     "resultTypeSpecifier" : {
                        "localId" : "241",
                        "type" : "TupleTypeSpecifier",
                        "element" : [ {
                           "localId" : "242",
                           "name" : "f",
                           "elementType" : {
                              "localId" : "243",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "type" : "NamedTypeSpecifier"
                           }
                        }, {
                           "localId" : "244",
                           "name" : "g",
                           "elementType" : {
                              "localId" : "245",
                              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                              "type" : "NamedTypeSpecifier"
                           }
                        } ]
                     },
                     "element" : [ {
                        "localId" : "237",
                        "name" : "f",
                        "elementType" : {
                           "localId" : "238",
                           "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "239",
                        "name" : "g",
                        "elementType" : {
                           "localId" : "240",
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
            "localId" : "282",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "280",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "281",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "279",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "285",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "285",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "286",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "286",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "218",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," default " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "215",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "213",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "214",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "212",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
                        "value" : [ "Boolean" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooDP"," default ","true" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
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
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
                        "value" : [ "Decimal" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooDP"," default ","1.5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "1.5",
               "type" : "Literal"
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
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooDP"," default ","2" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
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
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
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
         "translatorVersion" : "3.27.0",
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
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
                        "value" : [ "String" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
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
            "localId" : "221",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "221",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "222",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "222",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "Code" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "{urn:hl7-org:elm-types:r1}Code",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "Code ","'FooTest'"," from " ]
                     }, {
                        "r" : "215",
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
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "code" : "FooTest",
               "display" : "Foo Test",
               "type" : "Code",
               "system" : {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                  "name" : "FOOTESTCS"
               }
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
                  } ]
               }
            } ]
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
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "228",
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
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "210",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "211",
                     "s" : [ {
                        "value" : [ "Concept" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "211",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "213",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "213",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "value" : [ "Concept { " ]
                     }, {
                        "r" : "215",
                        "s" : [ {
                           "value" : [ "Code ","'FooTest'"," from " ]
                        }, {
                           "r" : "216",
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
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "display" : "Foo Test",
               "type" : "Concept",
               "code" : [ {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                  "code" : "FooTest",
                  "system" : {
                     "localId" : "216",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
                     "name" : "FOOTESTCS"
                  }
               } ]
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
                  } ]
               }
            } ]
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "221",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "219",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "220",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
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
                        "value" : [ "DateTime" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "name" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01T12:11:10" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "DateTime",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "hour" : {
                  "localId" : "216",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "218",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "223",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "221",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "222",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "220",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "230",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "231",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "231",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "228",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
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
                        "value" : [ "Date" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "name" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "216",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "216",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "Date",
               "signature" : [ ],
               "year" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "221",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "219",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "220",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "218",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "228",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "229",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "229",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
                        "value" : [ "Quantity" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "name" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "10 ","'dL'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "value" : 10,
               "unit" : "dL",
               "type" : "Quantity"
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
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
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
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "227",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
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
                        "value" : [ "Time" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "name" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooDP"," default ","@T12:00:00" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "Time",
               "signature" : [ ],
               "hour" : {
                  "localId" : "213",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "localId" : "214",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "second" : {
                  "localId" : "215",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
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
            "localId" : "223",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "223",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "243",
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
                        "value" : [ "List<" ]
                     }, {
                        "r" : "210",
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
               "localId" : "214",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "type" : "ListTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "211",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "212",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "elementType" : {
                  "localId" : "210",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "216",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "217",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "'b'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "222",
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
               "localId" : "227",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "228",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "217",
               "type" : "List",
               "resultTypeSpecifier" : {
                  "localId" : "224",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "225",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "element" : [ {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }, {
                  "localId" : "220",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "b",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
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
            "localId" : "232",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "230",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "231",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "229",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "235",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "FooP" ]
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
               "name" : "FooP",
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
         }, {
            "localId" : "243",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "243",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "244",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "247",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "248",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "244",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "245",
                  "type" : "ListTypeSpecifier",
                  "elementType" : {
                     "localId" : "246",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "239",
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
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "210",
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
               "localId" : "214",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "type" : "IntervalTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "211",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "212",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "pointType" : {
                  "localId" : "210",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "216",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "216",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "217",
                        "value" : [ "Interval[","2",",","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "223",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "default" : {
               "localId" : "219",
               "lowClosed" : true,
               "highClosed" : true,
               "type" : "Interval",
               "resultTypeSpecifier" : {
                  "localId" : "220",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "221",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "low" : {
                  "localId" : "217",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "high" : {
                  "localId" : "218",
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
            "localId" : "228",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "226",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "227",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "225",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "231",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "231",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "232",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "235",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "236",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "232",
               "name" : "FooP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "233",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "234",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }
            }
         }, {
            "localId" : "239",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "239",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "240",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "243",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "244",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "expression" : {
               "localId" : "240",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "241",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "242",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "261",
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
                        "value" : [ "Tuple { " ]
                     }, {
                        "r" : "210",
                        "s" : [ {
                           "value" : [ "Hello"," " ]
                        }, {
                           "r" : "211",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "212",
                        "s" : [ {
                           "value" : [ "MeaningOfLife"," " ]
                        }, {
                           "r" : "213",
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
               "localId" : "220",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "221",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "222",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "223",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "224",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "type" : "TupleTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "214",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "215",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "216",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "217",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "218",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "localId" : "210",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "211",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "212",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "213",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "225",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "225",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "226",
                     "s" : [ {
                        "value" : [ "Tuple { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Hello",": " ]
                        }, {
                           "r" : "227",
                           "s" : [ {
                              "value" : [ "'Universe'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "r" : "229",
                           "value" : [ "MeaningOfLife",": ","24" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "236",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "237",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "238",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "239",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "240",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "default" : {
               "localId" : "226",
               "type" : "Tuple",
               "resultTypeSpecifier" : {
                  "localId" : "230",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "231",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "233",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "234",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  } ]
               },
               "element" : [ {
                  "name" : "Hello",
                  "value" : {
                     "localId" : "227",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Universe",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "MeaningOfLife",
                  "value" : {
                     "localId" : "229",
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
            "localId" : "244",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "242",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "243",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "241",
                  "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
                  "type" : "Retrieve",
                  "include" : [ ],
                  "codeFilter" : [ ],
                  "dateFilter" : [ ],
                  "otherFilter" : [ ]
               }
            }
         }, {
            "localId" : "247",
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "247",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "248",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "254",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "255",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "256",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "257",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "258",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "248",
               "name" : "FooP",
               "type" : "ParameterRef",
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
               }
            }
         }, {
            "localId" : "261",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "261",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "262",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "resultTypeSpecifier" : {
               "localId" : "268",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "269",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "270",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "271",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "272",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            },
            "expression" : {
               "localId" : "262",
               "name" : "FooDP",
               "type" : "ParameterRef",
               "resultTypeSpecifier" : {
                  "localId" : "263",
                  "type" : "TupleTypeSpecifier",
                  "element" : [ {
                     "localId" : "264",
                     "name" : "Hello",
                     "elementType" : {
                        "localId" : "265",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "type" : "NamedTypeSpecifier"
                     }
                  }, {
                     "localId" : "266",
                     "name" : "MeaningOfLife",
                     "elementType" : {
                        "localId" : "267",
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
         "translatorVersion" : "3.27.0",
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
         "signatureLevel" : "All",
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
      "parameters" : {
         "def" : [ {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooWithNoDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","FooWithNoDefault"," " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "FooWithDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "r" : "212",
                     "value" : [ "","parameter ","FooWithDefault"," default ","5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
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
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
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
                        "value" : [ "FooWithNoDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "221",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
               "name" : "FooWithNoDefault",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "224",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "224",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "225",
                     "s" : [ {
                        "value" : [ "FooWithDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "225",
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
         "translatorVersion" : "3.27.0",
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
            "name" : "Measurement Period",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","parameter ","\"Measurement Period\""," " ]
                  }, {
                     "r" : "209",
                     "s" : [ {
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "210",
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
               "localId" : "214",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            },
            "parameterTypeSpecifier" : {
               "localId" : "209",
               "type" : "IntervalTypeSpecifier",
               "resultTypeSpecifier" : {
                  "localId" : "211",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "212",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               },
               "pointType" : {
                  "localId" : "210",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
         } ]
      },
      "contexts" : {
         "def" : [ {
            "localId" : "219",
            "name" : "Patient"
         } ]
      },
      "statements" : {
         "def" : [ {
            "localId" : "217",
            "name" : "Patient",
            "context" : "Patient",
            "expression" : {
               "localId" : "218",
               "type" : "SingletonFrom",
               "signature" : [ ],
               "operand" : {
                  "localId" : "216",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "MeasurementPeriod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","MeasurementPeriod",": " ]
                  }, {
                     "r" : "253",
                     "s" : [ {
                        "r" : "247",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "r" : "223",
                              "value" : [ "DateTime","(","2011",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "243",
                           "s" : [ {
                              "r" : "235",
                              "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ "]" ]
                        } ]
                     }, {
                        "r" : "253",
                        "value" : [ " ","overlaps"," " ]
                     }, {
                        "r" : "250",
                        "s" : [ {
                           "value" : [ "\"Measurement Period\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "253",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Overlaps",
               "signature" : [ {
                  "localId" : "254",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "255",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "256",
                  "type" : "IntervalTypeSpecifier",
                  "pointType" : {
                     "localId" : "257",
                     "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "NamedTypeSpecifier"
                  }
               } ],
               "operand" : [ {
                  "localId" : "247",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "resultTypeSpecifier" : {
                     "localId" : "248",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "249",
                        "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                        "type" : "NamedTypeSpecifier"
                     }
                  },
                  "low" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "232",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "233",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "234",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "223",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2011",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "224",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "225",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  },
                  "high" : {
                     "localId" : "243",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                     "type" : "DateTime",
                     "signature" : [ {
                        "localId" : "244",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "245",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }, {
                        "localId" : "246",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "year" : {
                        "localId" : "235",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "236",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "237",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "250",
                  "name" : "Measurement Period",
                  "type" : "ParameterRef",
                  "resultTypeSpecifier" : {
                     "localId" : "251",
                     "type" : "IntervalTypeSpecifier",
                     "pointType" : {
                        "localId" : "252",
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

