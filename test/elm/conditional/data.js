/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* If
library TestSnippet version '1'
using Simple version '1.0.0'
parameter var Boolean
context Patient
define exp: if var then 'true return' else 'false return'
*/

module.exports['If'] = {
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
            "name" : "var",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","var"," " ]
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
               "name" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "NamedTypeSpecifier"
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
            "name" : "exp",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "214",
                  "s" : [ {
                     "value" : [ "","define ","exp",": " ]
                  }, {
                     "r" : "215",
                     "s" : [ {
                        "value" : [ "if " ]
                     }, {
                        "r" : "216",
                        "s" : [ {
                           "value" : [ "var" ]
                        } ]
                     }, {
                        "value" : [ " then " ]
                     }, {
                        "r" : "217",
                        "s" : [ {
                           "value" : [ "'true return'" ]
                        } ]
                     }, {
                        "value" : [ " else " ]
                     }, {
                        "r" : "218",
                        "s" : [ {
                           "value" : [ "'false return'" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "215",
               "type" : "If",
               "condition" : {
                  "localId" : "216",
                  "name" : "var",
                  "type" : "ParameterRef"
               },
               "then" : {
                  "localId" : "217",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "true return",
                  "type" : "Literal"
               },
               "else" : {
                  "localId" : "218",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "false return",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

/* Case
library TestSnippet version '1'
using Simple version '1.0.0'
parameter var Integer
parameter X Integer
parameter Y Integer
context Patient

define selected:
  case var
   when 1 then 'one'
   when 2 then 'two'
   else
    '?'
  end

define standard:
  case
    when X > Y then 'X > Y'
    when X < Y then 'X < Y'
    else 'X == Y'
  end
*/

module.exports['Case'] = {
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
            "r" : "229",
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
            "name" : "var",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","parameter ","var"," " ]
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
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "209",
            "name" : "X",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","parameter ","X"," " ]
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
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
         }, {
            "localId" : "211",
            "name" : "Y",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","parameter ","Y"," " ]
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
               "name" : "{urn:hl7-org:elm-types:r1}Integer",
               "type" : "NamedTypeSpecifier"
            }
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
            "name" : "selected",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","selected",":\n  " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "case " ]
                     }, {
                        "r" : "220",
                        "s" : [ {
                           "value" : [ "var" ]
                        } ]
                     }, {
                        "value" : [ "\n   " ]
                     }, {
                        "r" : "221",
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "when ","1"," then " ]
                        }, {
                           "r" : "223",
                           "s" : [ {
                              "value" : [ "'one'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n   " ]
                     }, {
                        "r" : "224",
                        "s" : [ {
                           "r" : "225",
                           "value" : [ "when ","2"," then " ]
                        }, {
                           "r" : "226",
                           "s" : [ {
                              "value" : [ "'two'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n   else\n    " ]
                     }, {
                        "r" : "227",
                        "s" : [ {
                           "value" : [ "'?'" ]
                        } ]
                     }, {
                        "value" : [ "\n  end" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "type" : "Case",
               "comparand" : {
                  "localId" : "220",
                  "name" : "var",
                  "type" : "ParameterRef"
               },
               "caseItem" : [ {
                  "localId" : "221",
                  "when" : {
                     "localId" : "222",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "1",
                     "type" : "Literal"
                  },
                  "then" : {
                     "localId" : "223",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "one",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "224",
                  "when" : {
                     "localId" : "225",
                     "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                     "value" : "2",
                     "type" : "Literal"
                  },
                  "then" : {
                     "localId" : "226",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "two",
                     "type" : "Literal"
                  }
               } ],
               "else" : {
                  "localId" : "227",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "?",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "229",
            "name" : "standard",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "229",
                  "s" : [ {
                     "value" : [ "","define ","standard",":\n  " ]
                  }, {
                     "r" : "230",
                     "s" : [ {
                        "value" : [ "case\n    " ]
                     }, {
                        "r" : "231",
                        "s" : [ {
                           "value" : [ "when " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "r" : "233",
                              "s" : [ {
                                 "value" : [ "X" ]
                              } ]
                           }, {
                              "value" : [ " ",">"," " ]
                           }, {
                              "r" : "234",
                              "s" : [ {
                                 "value" : [ "Y" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "235",
                           "s" : [ {
                              "value" : [ "'X > Y'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    " ]
                     }, {
                        "r" : "236",
                        "s" : [ {
                           "value" : [ "when " ]
                        }, {
                           "r" : "237",
                           "s" : [ {
                              "r" : "238",
                              "s" : [ {
                                 "value" : [ "X" ]
                              } ]
                           }, {
                              "value" : [ " ","<"," " ]
                           }, {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "Y" ]
                              } ]
                           } ]
                        }, {
                           "value" : [ " then " ]
                        }, {
                           "r" : "240",
                           "s" : [ {
                              "value" : [ "'X < Y'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n    else " ]
                     }, {
                        "r" : "241",
                        "s" : [ {
                           "value" : [ "'X == Y'" ]
                        } ]
                     }, {
                        "value" : [ "\n  end" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "230",
               "type" : "Case",
               "caseItem" : [ {
                  "localId" : "231",
                  "when" : {
                     "localId" : "232",
                     "type" : "Greater",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "233",
                        "name" : "X",
                        "type" : "ParameterRef"
                     }, {
                        "localId" : "234",
                        "name" : "Y",
                        "type" : "ParameterRef"
                     } ]
                  },
                  "then" : {
                     "localId" : "235",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "X > Y",
                     "type" : "Literal"
                  }
               }, {
                  "localId" : "236",
                  "when" : {
                     "localId" : "237",
                     "type" : "Less",
                     "signature" : [ ],
                     "operand" : [ {
                        "localId" : "238",
                        "name" : "X",
                        "type" : "ParameterRef"
                     }, {
                        "localId" : "239",
                        "name" : "Y",
                        "type" : "ParameterRef"
                     } ]
                  },
                  "then" : {
                     "localId" : "240",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "X < Y",
                     "type" : "Literal"
                  }
               } ],
               "else" : {
                  "localId" : "241",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "X == Y",
                  "type" : "Literal"
               }
            }
         } ]
      }
   }
}

