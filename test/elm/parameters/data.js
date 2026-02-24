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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "285",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "r" : "209",
              "value" : [ "", "parameter ", "MeasureYear", " default ", "2012" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "2012",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "IntParameter",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "value" : [ "", "parameter ", "IntParameter", " " ]
            }, {
              "r" : "212",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "214",
        "name" : "ListParameter",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "parameter ", "ListParameter", " " ]
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
          "type" : "ListTypeSpecifier",
          "localId" : "220",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "parameterTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "215",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "217",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "218",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "222",
        "name" : "TupleParameter",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "parameter ", "TupleParameter", " " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "Tuple{" ]
              }, {
                "r" : "224",
                "s" : [ {
                  "value" : [ "a", " " ]
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
                  "value" : [ "b", " " ]
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
                  "value" : [ "c", " " ]
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
                  "value" : [ "d", " " ]
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
                  "value" : [ "e", " " ]
                }, {
                  "r" : "236",
                  "s" : [ {
                    "value" : [ "Tuple{ " ]
                  }, {
                    "r" : "237",
                    "s" : [ {
                      "value" : [ "f", " " ]
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
                      "value" : [ "g", " " ]
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
          "type" : "TupleTypeSpecifier",
          "localId" : "263",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "264",
            "name" : "a",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "265",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "266",
            "name" : "b",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "267",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "268",
            "name" : "c",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "269",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          }, {
            "localId" : "270",
            "name" : "d",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "271",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "272",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }
          }, {
            "localId" : "273",
            "name" : "e",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "274",
              "annotation" : [ ],
              "element" : [ {
                "localId" : "275",
                "name" : "f",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "276",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "277",
                "name" : "g",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "annotation" : [ ]
                }
              } ]
            }
          } ]
        },
        "parameterTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "223",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "246",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "247",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "248",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "249",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "250",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "251",
              "name" : "c",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "252",
                "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                "annotation" : [ ]
              }
            }, {
              "localId" : "253",
              "name" : "d",
              "annotation" : [ ],
              "elementType" : {
                "type" : "ListTypeSpecifier",
                "localId" : "254",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "255",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              }
            }, {
              "localId" : "256",
              "name" : "e",
              "annotation" : [ ],
              "elementType" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "257",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "258",
                  "name" : "f",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "259",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "260",
                  "name" : "g",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "261",
                    "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "annotation" : [ ]
                  }
                } ]
              }
            } ]
          },
          "element" : [ {
            "localId" : "224",
            "name" : "a",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          }, {
            "localId" : "226",
            "name" : "b",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "228",
            "name" : "c",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
              "name" : "{urn:hl7-org:elm-types:r1}Boolean",
              "annotation" : [ ]
            }
          }, {
            "localId" : "230",
            "name" : "d",
            "annotation" : [ ],
            "elementType" : {
              "type" : "ListTypeSpecifier",
              "localId" : "231",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "ListTypeSpecifier",
                "localId" : "233",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "234",
                  "name" : "{urn:hl7-org:elm-types:r1}Integer",
                  "annotation" : [ ]
                }
              },
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }
          }, {
            "localId" : "235",
            "name" : "e",
            "annotation" : [ ],
            "elementType" : {
              "type" : "TupleTypeSpecifier",
              "localId" : "236",
              "annotation" : [ ],
              "resultTypeSpecifier" : {
                "type" : "TupleTypeSpecifier",
                "localId" : "241",
                "annotation" : [ ],
                "element" : [ {
                  "localId" : "242",
                  "name" : "f",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "243",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }
                }, {
                  "localId" : "244",
                  "name" : "g",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "245",
                    "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "annotation" : [ ]
                  }
                } ]
              },
              "element" : [ {
                "localId" : "237",
                "name" : "f",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "238",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }
              }, {
                "localId" : "239",
                "name" : "g",
                "annotation" : [ ],
                "elementType" : {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "240",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "annotation" : [ ]
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
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "280",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "281",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "279",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "285",
            "s" : [ {
              "value" : [ "", "define ", "foo", ": " ]
            }, {
              "r" : "286",
              "s" : [ {
                "value" : [ "'bar'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "286",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "bar",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "218",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " default " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "'Bar'" ]
              } ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Bar",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "213",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "214",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "212",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "218",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "219",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "219",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "FooP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "224",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Boolean" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooDP", " default ", "true" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
          "value" : "true",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "224",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Decimal" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "{urn:hl7-org:elm-types:r1}Decimal",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooDP", " default ", "1.5" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
          "value" : "1.5",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "224",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooDP", " default ", "2" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "2",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "225",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "String" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "212",
              "s" : [ {
                "value" : [ "'Hello'" ]
              } ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Hello",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "216",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "217",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "215",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "221",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "227",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "Code" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "{urn:hl7-org:elm-types:r1}Code",
          "annotation" : [ ]
        }
      }, {
        "localId" : "213",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "213",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "214",
              "s" : [ {
                "value" : [ "Code ", "'FooTest'", " from " ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "\"FOOTESTCS\"" ]
                } ]
              }, {
                "value" : [ " display ", "'Foo Test'" ]
              } ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Code",
          "localId" : "214",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "code" : "FooTest",
          "display" : "Foo Test",
          "annotation" : [ ],
          "system" : {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "FOOTESTCS",
            "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"FOOTESTCS\"", ": ", "'http://footest.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "220",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "219",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "217",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "228",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "210",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "211",
              "s" : [ {
                "value" : [ "Concept" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "211",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "name" : "{urn:hl7-org:elm-types:r1}Concept",
          "annotation" : [ ]
        }
      }, {
        "localId" : "213",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "213",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "214",
              "s" : [ {
                "value" : [ "Concept { " ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "Code ", "'FooTest'", " from " ]
                }, {
                  "r" : "216",
                  "s" : [ {
                    "value" : [ "\"FOOTESTCS\"" ]
                  } ]
                } ]
              }, {
                "value" : [ " } display ", "'Foo Test'" ]
              } ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Concept",
          "localId" : "214",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "display" : "Foo Test",
          "annotation" : [ ],
          "code" : [ {
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "code" : "FooTest",
            "annotation" : [ ],
            "system" : {
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "name" : "FOOTESTCS",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "codesystem ", "\"FOOTESTCS\"", ": ", "'http://footest.org'" ]
            } ]
          }
        } ]
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "221",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "219",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "220",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "218",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "230",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "DateTime" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "name" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooDP", " default ", "@2012-04-01T12:11:10" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "DateTime",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "annotation" : [ ],
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2012",
            "annotation" : [ ]
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "4",
            "annotation" : [ ]
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          },
          "hour" : {
            "type" : "Literal",
            "localId" : "216",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "12",
            "annotation" : [ ]
          },
          "minute" : {
            "type" : "Literal",
            "localId" : "217",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "11",
            "annotation" : [ ]
          },
          "second" : {
            "type" : "Literal",
            "localId" : "218",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "10",
            "annotation" : [ ]
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "223",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "221",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "222",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "220",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "226",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "227",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "227",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "230",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "228",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Date" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "name" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "216",
              "value" : [ "", "parameter ", "FooDP", " default ", "@2012-04-01" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Date",
          "localId" : "216",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "annotation" : [ ],
          "signature" : [ ],
          "year" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2012",
            "annotation" : [ ]
          },
          "month" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "4",
            "annotation" : [ ]
          },
          "day" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "1",
            "annotation" : [ ]
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "221",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "219",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "220",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "218",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "229",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "229",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "224",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Quantity" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "name" : "{urn:hl7-org:elm-types:r1}Quantity",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "212",
              "s" : [ {
                "value" : [ "10 ", "'dL'" ]
              } ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Quantity",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "value" : 10,
          "unit" : "dL",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "227",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Time" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "name" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooDP", " default ", "@T12:00:00" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Time",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "annotation" : [ ],
          "signature" : [ ],
          "hour" : {
            "type" : "Literal",
            "localId" : "213",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "12",
            "annotation" : [ ]
          },
          "minute" : {
            "type" : "Literal",
            "localId" : "214",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          },
          "second" : {
            "type" : "Literal",
            "localId" : "215",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "220",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "218",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "219",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "217",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "name" : "FooP",
          "annotation" : [ ]
        }
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "228",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "228",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Time",
          "name" : "FooDP",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "243",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
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
          "type" : "ListTypeSpecifier",
          "localId" : "214",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "parameterTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "209",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "211",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "212",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
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
          "type" : "ListTypeSpecifier",
          "localId" : "227",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "228",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "List",
          "localId" : "217",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "224",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "element" : [ {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "a",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "220",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "b",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "c",
            "annotation" : [ ]
          } ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "232",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "230",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "231",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "229",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "235",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "236",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "239",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "236",
          "name" : "FooP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "237",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "244",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "247",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "244",
          "name" : "FooDP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "245",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "246",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "239",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
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
          "type" : "IntervalTypeSpecifier",
          "localId" : "214",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "parameterTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "209",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "211",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "212",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "216",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "216",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "219",
              "s" : [ {
                "r" : "217",
                "value" : [ "Interval[", "2", ",", "6", "]" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "223",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "default" : {
          "type" : "Interval",
          "localId" : "219",
          "lowClosed" : true,
          "highClosed" : true,
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "220",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "221",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          },
          "low" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          },
          "high" : {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "228",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "226",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "227",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "225",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "231",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "232",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "235",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "236",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "232",
          "name" : "FooP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "233",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "234",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "239",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "243",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "244",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "240",
          "name" : "FooDP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "241",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "242",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "261",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooP", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Tuple { " ]
              }, {
                "r" : "210",
                "s" : [ {
                  "value" : [ "Hello", " " ]
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
                  "value" : [ "MeaningOfLife", " " ]
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
          "type" : "TupleTypeSpecifier",
          "localId" : "220",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "221",
            "name" : "Hello",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "222",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "223",
            "name" : "MeaningOfLife",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "224",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "parameterTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "209",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "214",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "215",
              "name" : "Hello",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "216",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "217",
              "name" : "MeaningOfLife",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "218",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "element" : [ {
            "localId" : "210",
            "name" : "Hello",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "211",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "212",
            "name" : "MeaningOfLife",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "213",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "225",
        "name" : "FooDP",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "parameter ", "FooDP", " default " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "Tuple { " ]
              }, {
                "s" : [ {
                  "value" : [ "Hello", ": " ]
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
                  "value" : [ "MeaningOfLife", ": ", "24" ]
                } ]
              }, {
                "value" : [ " }" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "236",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "237",
            "name" : "Hello",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "238",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "239",
            "name" : "MeaningOfLife",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "240",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "default" : {
          "type" : "Tuple",
          "localId" : "226",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "230",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "231",
              "name" : "Hello",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "233",
              "name" : "MeaningOfLife",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "234",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "element" : [ {
            "name" : "Hello",
            "value" : {
              "type" : "Literal",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Universe",
              "annotation" : [ ]
            }
          }, {
            "name" : "MeaningOfLife",
            "value" : {
              "type" : "Literal",
              "localId" : "229",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "24",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "244",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "242",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "243",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "241",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "247",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "248",
              "s" : [ {
                "value" : [ "FooP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "254",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "255",
            "name" : "Hello",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "257",
            "name" : "MeaningOfLife",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "258",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "248",
          "name" : "FooP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "249",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "250",
              "name" : "Hello",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "251",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "252",
              "name" : "MeaningOfLife",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "253",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
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
          "t" : [ ],
          "s" : {
            "r" : "261",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "262",
              "s" : [ {
                "value" : [ "FooDP" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "268",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "269",
            "name" : "Hello",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "270",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "localId" : "271",
            "name" : "MeaningOfLife",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "272",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "262",
          "name" : "FooDP",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "263",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "264",
              "name" : "Hello",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "265",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }, {
              "localId" : "266",
              "name" : "MeaningOfLife",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "267",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "224",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "FooWithNoDefault", " " ]
            }, {
              "r" : "209",
              "s" : [ {
                "value" : [ "Integer" ]
              } ]
            } ]
          }
        } ],
        "parameterTypeSpecifier" : {
          "type" : "NamedTypeSpecifier",
          "localId" : "209",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ]
        }
      }, {
        "localId" : "211",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "FooWithDefault",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "211",
            "s" : [ {
              "r" : "212",
              "value" : [ "", "parameter ", "FooWithDefault", " default ", "5" ]
            } ]
          }
        } ],
        "default" : {
          "type" : "Literal",
          "localId" : "212",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
          "value" : "5",
          "annotation" : [ ]
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "215",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "216",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "214",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "220",
            "s" : [ {
              "value" : [ "", "define ", "Foo", ": " ]
            }, {
              "r" : "221",
              "s" : [ {
                "value" : [ "FooWithNoDefault" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "221",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "FooWithNoDefault",
          "annotation" : [ ]
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Foo2",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "Foo2", ": " ]
            }, {
              "r" : "225",
              "s" : [ {
                "value" : [ "FooWithDefault" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ParameterRef",
          "localId" : "225",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "name" : "FooWithDefault",
          "annotation" : [ ]
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
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "222",
        "s" : [ {
          "value" : [ "", "library TestSnippet version '1'" ]
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
        "uri" : "urn:hl7-org:elm-types:r1",
        "annotation" : [ ]
      }, {
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "206",
            "s" : [ {
              "value" : [ "", "using " ]
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
          "t" : [ ],
          "s" : {
            "r" : "208",
            "s" : [ {
              "value" : [ "", "parameter ", "\"Measurement Period\"", " " ]
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
          "type" : "IntervalTypeSpecifier",
          "localId" : "214",
          "annotation" : [ ],
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "215",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        },
        "parameterTypeSpecifier" : {
          "type" : "IntervalTypeSpecifier",
          "localId" : "209",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "IntervalTypeSpecifier",
            "localId" : "211",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "212",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          },
          "pointType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "210",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
            "name" : "{urn:hl7-org:elm-types:r1}DateTime",
            "annotation" : [ ]
          }
        }
      } ]
    },
    "contexts" : {
      "def" : [ {
        "localId" : "219",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "217",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "218",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "216",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
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
          "t" : [ ],
          "s" : {
            "r" : "222",
            "s" : [ {
              "value" : [ "", "define ", "MeasurementPeriod", ": " ]
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
                    "value" : [ "DateTime", "(", "2011", ", ", "1", ", ", "1", ")" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "243",
                  "s" : [ {
                    "r" : "235",
                    "value" : [ "DateTime", "(", "2013", ", ", "1", ", ", "1", ")" ]
                  } ]
                }, {
                  "value" : [ "]" ]
                } ]
              }, {
                "r" : "253",
                "value" : [ " ", "overlaps", " " ]
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
          "type" : "Overlaps",
          "localId" : "253",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "IntervalTypeSpecifier",
            "localId" : "254",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "255",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          }, {
            "type" : "IntervalTypeSpecifier",
            "localId" : "256",
            "annotation" : [ ],
            "pointType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "257",
              "name" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ]
            }
          } ],
          "operand" : [ {
            "type" : "Interval",
            "localId" : "247",
            "lowClosed" : true,
            "highClosed" : true,
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "248",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "249",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            },
            "low" : {
              "type" : "DateTime",
              "localId" : "231",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "232",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "233",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "234",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "223",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2011",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "224",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "225",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            },
            "high" : {
              "type" : "DateTime",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "244",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "245",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "246",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              } ],
              "year" : {
                "type" : "Literal",
                "localId" : "235",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "2013",
                "annotation" : [ ]
              },
              "month" : {
                "type" : "Literal",
                "localId" : "236",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              },
              "day" : {
                "type" : "Literal",
                "localId" : "237",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                "value" : "1",
                "annotation" : [ ]
              }
            }
          }, {
            "type" : "ParameterRef",
            "localId" : "250",
            "name" : "Measurement Period",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "IntervalTypeSpecifier",
              "localId" : "251",
              "annotation" : [ ],
              "pointType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "252",
                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                "annotation" : [ ]
              }
            }
          } ]
        }
      } ]
    }
  }
}

