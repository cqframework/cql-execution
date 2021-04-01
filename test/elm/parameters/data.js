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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "MeasureYear",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "r" : "2",
                     "value" : [ "","parameter ","MeasureYear"," default ","2012" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2012",
               "type" : "Literal"
            }
         }, {
            "localId" : "5",
            "name" : "IntParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","parameter ","IntParameter"," " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "4",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "8",
            "name" : "ListParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","parameter ","ListParameter"," " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "7",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "6",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "25",
            "name" : "TupleParameter",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "25",
                  "s" : [ {
                     "value" : [ "","parameter ","TupleParameter"," " ]
                  }, {
                     "r" : "24",
                     "s" : [ {
                        "value" : [ "Tuple{" ]
                     }, {
                        "r" : "10",
                        "s" : [ {
                           "value" : [ "a"," " ]
                        }, {
                           "r" : "9",
                           "s" : [ {
                              "value" : [ "Integer" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "12",
                        "s" : [ {
                           "value" : [ "b"," " ]
                        }, {
                           "r" : "11",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "c"," " ]
                        }, {
                           "r" : "13",
                           "s" : [ {
                              "value" : [ "Boolean" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "17",
                        "s" : [ {
                           "value" : [ "d"," " ]
                        }, {
                           "r" : "16",
                           "s" : [ {
                              "value" : [ "List<" ]
                           }, {
                              "r" : "15",
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
                        "r" : "23",
                        "s" : [ {
                           "value" : [ "e"," " ]
                        }, {
                           "r" : "22",
                           "s" : [ {
                              "value" : [ "Tuple{ " ]
                           }, {
                              "r" : "19",
                              "s" : [ {
                                 "value" : [ "f"," " ]
                              }, {
                                 "r" : "18",
                                 "s" : [ {
                                    "value" : [ "String" ]
                                 } ]
                              } ]
                           }, {
                              "value" : [ ", " ]
                           }, {
                              "r" : "21",
                              "s" : [ {
                                 "value" : [ "g"," " ]
                              }, {
                                 "r" : "20",
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
            "parameterTypeSpecifier" : {
               "localId" : "24",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "10",
                  "name" : "a",
                  "elementType" : {
                     "localId" : "9",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "12",
                  "name" : "b",
                  "elementType" : {
                     "localId" : "11",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "14",
                  "name" : "c",
                  "elementType" : {
                     "localId" : "13",
                     "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "17",
                  "name" : "d",
                  "elementType" : {
                     "localId" : "16",
                     "type" : "ListTypeSpecifier",
                     "elementType" : {
                        "localId" : "15",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     }
                  }
               }, {
                  "localId" : "23",
                  "name" : "e",
                  "elementType" : {
                     "localId" : "22",
                     "type" : "TupleTypeSpecifier",
                     "element" : [ {
                        "localId" : "19",
                        "name" : "f",
                        "elementType" : {
                           "localId" : "18",
                           "name" : "{urn:hl7-org:elm-types:r1}String",
                           "type" : "NamedTypeSpecifier"
                        }
                     }, {
                        "localId" : "21",
                        "name" : "g",
                        "elementType" : {
                           "localId" : "20",
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
            "localId" : "27",
            "name" : "foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "27",
                  "s" : [ {
                     "value" : [ "","define ","foo",": " ]
                  }, {
                     "r" : "26",
                     "s" : [ {
                        "value" : [ "'bar'" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "26",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "5",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," default " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "'Bar'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "2",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Bar",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "4",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Boolean" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","true" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
               "value" : "true",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Decimal" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Decimal",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","1.5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
               "value" : "1.5",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","2" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "2",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "String" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}String",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "'Hello'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}String",
               "value" : "Hello",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "11",
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
      "parameters" : {
         "def" : [ {
            "localId" : "4",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Code" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "3",
               "name" : "{urn:hl7-org:elm-types:r1}Code",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "7",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "Code ","'FooTest'"," from " ]
                     }, {
                        "r" : "5",
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
               "localId" : "6",
               "code" : "FooTest",
               "display" : "Foo Test",
               "type" : "Code",
               "system" : {
                  "localId" : "5",
                  "name" : "FOOTESTCS"
               }
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "11",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
      "parameters" : {
         "def" : [ {
            "localId" : "4",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Concept" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "3",
               "name" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "8",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "value" : [ "Concept { " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "Code ","'FooTest'"," from " ]
                        }, {
                           "r" : "5",
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
               "localId" : "7",
               "display" : "Foo Test",
               "type" : "Concept",
               "code" : [ {
                  "localId" : "6",
                  "code" : "FooTest",
                  "system" : {
                     "localId" : "5",
                     "name" : "FOOTESTCS"
                  }
               } ]
            }
         } ]
      },
      "codeSystems" : {
         "def" : [ {
            "localId" : "2",
            "name" : "FOOTESTCS",
            "id" : "http://footest.org",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "2",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"FOOTESTCS\"",": ","'http://footest.org'" ]
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "12",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "DateTime" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}DateTime",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01T12:11:10" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "type" : "DateTime",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               },
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "11",
                  "type" : "Literal"
               },
               "second" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "10",
                  "type" : "Literal"
               }
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Date" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Date",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","@2012-04-01" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "type" : "Date",
               "year" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2012",
                  "type" : "Literal"
               },
               "month" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "4",
                  "type" : "Literal"
               },
               "day" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "1",
                  "type" : "Literal"
               }
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Quantity" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "4",
                     "s" : [ {
                        "value" : [ "10 ","'dL'" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "value" : 10,
               "unit" : "dL",
               "type" : "Quantity"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Time" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Time",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooDP"," default ","@T12:00:00" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "type" : "Time",
               "hour" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "12",
                  "type" : "Literal"
               },
               "minute" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               },
               "second" : {
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "0",
                  "type" : "Literal"
               }
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "13",
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
      "parameters" : {
         "def" : [ {
            "localId" : "4",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "List<" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "String" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "3",
               "type" : "ListTypeSpecifier",
               "elementType" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "9",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "{ " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "'a'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "6",
                        "s" : [ {
                           "value" : [ "'b'" ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "7",
                        "s" : [ {
                           "value" : [ "'c'" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "8",
               "type" : "List",
               "element" : [ {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "a",
                  "type" : "Literal"
               }, {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "b",
                  "type" : "Literal"
               }, {
                  "localId" : "7",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "c",
                  "type" : "Literal"
               } ]
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "10",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "13",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "name" : "FooDP",
               "type" : "ParameterRef"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "12",
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
      "parameters" : {
         "def" : [ {
            "localId" : "4",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "Integer" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "3",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "type" : "NamedTypeSpecifier"
               }
            }
         }, {
            "localId" : "8",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "8",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "7",
                     "s" : [ {
                        "r" : "5",
                        "value" : [ "Interval[","2",",","6","]" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "7",
               "lowClosed" : true,
               "highClosed" : true,
               "type" : "Interval",
               "low" : {
                  "localId" : "5",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "2",
                  "type" : "Literal"
               },
               "high" : {
                  "localId" : "6",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                  "value" : "6",
                  "type" : "Literal"
               }
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "10",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "9",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "9",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "12",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "12",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "11",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "11",
               "name" : "FooDP",
               "type" : "ParameterRef"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "15",
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
      "parameters" : {
         "def" : [ {
            "localId" : "7",
            "name" : "FooP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","parameter ","FooP"," " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "Tuple { " ]
                     }, {
                        "r" : "3",
                        "s" : [ {
                           "value" : [ "Hello"," " ]
                        }, {
                           "r" : "2",
                           "s" : [ {
                              "value" : [ "String" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "r" : "5",
                        "s" : [ {
                           "value" : [ "MeaningOfLife"," " ]
                        }, {
                           "r" : "4",
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
            "parameterTypeSpecifier" : {
               "localId" : "6",
               "type" : "TupleTypeSpecifier",
               "element" : [ {
                  "localId" : "3",
                  "name" : "Hello",
                  "elementType" : {
                     "localId" : "2",
                     "name" : "{urn:hl7-org:elm-types:r1}String",
                     "type" : "NamedTypeSpecifier"
                  }
               }, {
                  "localId" : "5",
                  "name" : "MeaningOfLife",
                  "elementType" : {
                     "localId" : "4",
                     "name" : "{urn:hl7-org:elm-types:r1}Integer",
                     "type" : "NamedTypeSpecifier"
                  }
               } ]
            }
         }, {
            "localId" : "11",
            "name" : "FooDP",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "11",
                  "s" : [ {
                     "value" : [ "","parameter ","FooDP"," default " ]
                  }, {
                     "r" : "10",
                     "s" : [ {
                        "value" : [ "Tuple { " ]
                     }, {
                        "s" : [ {
                           "value" : [ "Hello",": " ]
                        }, {
                           "r" : "8",
                           "s" : [ {
                              "value" : [ "'Universe'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ", " ]
                     }, {
                        "s" : [ {
                           "r" : "9",
                           "value" : [ "MeaningOfLife",": ","24" ]
                        } ]
                     }, {
                        "value" : [ " }" ]
                     } ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "10",
               "type" : "Tuple",
               "element" : [ {
                  "name" : "Hello",
                  "value" : {
                     "localId" : "8",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Universe",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "MeaningOfLife",
                  "value" : {
                     "localId" : "9",
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "13",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "12",
                     "s" : [ {
                        "value" : [ "FooP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "12",
               "name" : "FooP",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "15",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "15",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "14",
                     "s" : [ {
                        "value" : [ "FooDP" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "14",
               "name" : "FooDP",
               "type" : "ParameterRef"
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "9",
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
      "parameters" : {
         "def" : [ {
            "localId" : "3",
            "name" : "FooWithNoDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "3",
                  "s" : [ {
                     "value" : [ "","parameter ","FooWithNoDefault"," " ]
                  }, {
                     "r" : "2",
                     "s" : [ {
                        "value" : [ "Integer" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "2",
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "5",
            "name" : "FooWithDefault",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "5",
                  "s" : [ {
                     "r" : "4",
                     "value" : [ "","parameter ","FooWithDefault"," default ","5" ]
                  } ]
               }
            } ],
            "default" : {
               "localId" : "4",
               "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
               "value" : "5",
               "type" : "Literal"
            }
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
            "name" : "Foo",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "7",
                  "s" : [ {
                     "value" : [ "","define ","Foo",": " ]
                  }, {
                     "r" : "6",
                     "s" : [ {
                        "value" : [ "FooWithNoDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "6",
               "name" : "FooWithNoDefault",
               "type" : "ParameterRef"
            }
         }, {
            "localId" : "9",
            "name" : "Foo2",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "9",
                  "s" : [ {
                     "value" : [ "","define ","Foo2",": " ]
                  }, {
                     "r" : "8",
                     "s" : [ {
                        "value" : [ "FooWithDefault" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "8",
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
      "annotation" : [ {
         "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
         "type" : "CqlToElmInfo"
      }, {
         "type" : "Annotation",
         "s" : {
            "r" : "16",
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
      "parameters" : {
         "def" : [ {
            "localId" : "4",
            "name" : "Measurement Period",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "4",
                  "s" : [ {
                     "value" : [ "","parameter ","\"Measurement Period\""," " ]
                  }, {
                     "r" : "3",
                     "s" : [ {
                        "value" : [ "Interval<" ]
                     }, {
                        "r" : "2",
                        "s" : [ {
                           "value" : [ "DateTime" ]
                        } ]
                     }, {
                        "value" : [ ">" ]
                     } ]
                  } ]
               }
            } ],
            "parameterTypeSpecifier" : {
               "localId" : "3",
               "type" : "IntervalTypeSpecifier",
               "pointType" : {
                  "localId" : "2",
                  "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                  "type" : "NamedTypeSpecifier"
               }
            }
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
            "localId" : "16",
            "name" : "MeasurementPeriod",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "16",
                  "s" : [ {
                     "value" : [ "","define ","MeasurementPeriod",": " ]
                  }, {
                     "r" : "15",
                     "s" : [ {
                        "r" : "13",
                        "s" : [ {
                           "value" : [ "Interval[" ]
                        }, {
                           "r" : "8",
                           "s" : [ {
                              "r" : "5",
                              "value" : [ "DateTime","(","2011",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ ", " ]
                        }, {
                           "r" : "12",
                           "s" : [ {
                              "r" : "9",
                              "value" : [ "DateTime","(","2013",", ","1",", ","1",")" ]
                           } ]
                        }, {
                           "value" : [ "]" ]
                        } ]
                     }, {
                        "r" : "15",
                        "value" : [ " ","overlaps"," " ]
                     }, {
                        "r" : "14",
                        "s" : [ {
                           "value" : [ "\"Measurement Period\"" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "15",
               "type" : "Overlaps",
               "operand" : [ {
                  "localId" : "13",
                  "lowClosed" : true,
                  "highClosed" : true,
                  "type" : "Interval",
                  "low" : {
                     "localId" : "8",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "5",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2011",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "6",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "7",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  },
                  "high" : {
                     "localId" : "12",
                     "type" : "DateTime",
                     "year" : {
                        "localId" : "9",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "2013",
                        "type" : "Literal"
                     },
                     "month" : {
                        "localId" : "10",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     },
                     "day" : {
                        "localId" : "11",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "1",
                        "type" : "Literal"
                     }
                  }
               }, {
                  "localId" : "14",
                  "name" : "Measurement Period",
                  "type" : "ParameterRef"
               } ]
            }
         } ]
      }
   }
}

