/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Instance
library TestSnippet version '1'
using Simple version '1.0.0'
codesystem "SNOMED": '2.16.840.1.113883.6.96'
codesystem "SIMPLE": '1.2.3.4.5'
code "Viral pharyngitis code": '1532007' from "SNOMED" display 'Viral pharyngitis (disorder)'
code "Active code": 'active' from "SNOMED" display 'Active'
context Patient

define QuantityA: Quantity {
  unit: 'a',
  value: 12
}

define CodeA: Code {
  system: 'http://loinc.org',
  code: '12345',
  version: '1',
  display: 'Test Code'
}

define ConceptA: Concept {
  codes: { CodeA },
  display: 'Test Concept'
}

define Pharyngitis : Condition {
  code: "Viral pharyngitis code",
  status: "Active code"
}

define val: QuantityA.value
*/

module.exports['Instance'] = {
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
            "r" : "250",
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
      "codeSystems" : {
         "def" : [ {
            "localId" : "207",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SNOMED",
            "id" : "2.16.840.1.113883.6.96",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "207",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SNOMED\"",": ","'2.16.840.1.113883.6.96'" ]
                  } ]
               }
            } ]
         }, {
            "localId" : "208",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
            "name" : "SIMPLE",
            "id" : "1.2.3.4.5",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "208",
                  "s" : [ {
                     "value" : [ "","codesystem ","\"SIMPLE\"",": ","'1.2.3.4.5'" ]
                  } ]
               }
            } ]
         } ]
      },
      "codes" : {
         "def" : [ {
            "localId" : "209",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Viral pharyngitis code",
            "id" : "1532007",
            "display" : "Viral pharyngitis (disorder)",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "209",
                  "s" : [ {
                     "value" : [ "","code ","\"Viral pharyngitis code\"",": ","'1532007'"," from " ]
                  }, {
                     "r" : "210",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Viral pharyngitis (disorder)'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "210",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
            }
         }, {
            "localId" : "211",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "Active code",
            "id" : "active",
            "display" : "Active",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "211",
                  "s" : [ {
                     "value" : [ "","code ","\"Active code\"",": ","'active'"," from " ]
                  }, {
                     "r" : "212",
                     "s" : [ {
                        "value" : [ "\"SNOMED\"" ]
                     } ]
                  }, {
                     "value" : [ " display ","'Active'" ]
                  } ]
               }
            } ],
            "codeSystem" : {
               "localId" : "212",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
               "name" : "SNOMED"
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
            "name" : "QuantityA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "218",
                  "s" : [ {
                     "value" : [ "","define ","QuantityA",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "value" : [ "Quantity"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "unit",": " ]
                        }, {
                           "r" : "221",
                           "s" : [ {
                              "value" : [ "'a'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "r" : "222",
                           "value" : [ "value",": ","12" ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
               "classType" : "{urn:hl7-org:elm-types:r1}Quantity",
               "type" : "Instance",
               "element" : [ {
                  "name" : "unit",
                  "value" : {
                     "localId" : "221",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "a",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "value",
                  "value" : {
                     "localId" : "224",
                     "type" : "ToDecimal",
                     "signature" : [ {
                        "localId" : "225",
                        "name" : "{urn:hl7-org:elm-types:r1}Integer",
                        "type" : "NamedTypeSpecifier"
                     } ],
                     "operand" : {
                        "localId" : "222",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                        "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                        "value" : "12",
                        "type" : "Literal"
                     }
                  }
               } ]
            }
         }, {
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
            "name" : "CodeA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "227",
                  "s" : [ {
                     "value" : [ "","define ","CodeA",": " ]
                  }, {
                     "r" : "228",
                     "s" : [ {
                        "value" : [ "Code"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "system",": " ]
                        }, {
                           "r" : "230",
                           "s" : [ {
                              "value" : [ "'http://loinc.org'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "code",": " ]
                        }, {
                           "r" : "231",
                           "s" : [ {
                              "value" : [ "'12345'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "version",": " ]
                        }, {
                           "r" : "232",
                           "s" : [ {
                              "value" : [ "'1'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "display",": " ]
                        }, {
                           "r" : "233",
                           "s" : [ {
                              "value" : [ "'Test Code'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "228",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
               "classType" : "{urn:hl7-org:elm-types:r1}Code",
               "type" : "Instance",
               "element" : [ {
                  "name" : "system",
                  "value" : {
                     "localId" : "230",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "http://loinc.org",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "code",
                  "value" : {
                     "localId" : "231",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "12345",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "version",
                  "value" : {
                     "localId" : "232",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "1",
                     "type" : "Literal"
                  }
               }, {
                  "name" : "display",
                  "value" : {
                     "localId" : "233",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Test Code",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
            "name" : "ConceptA",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "235",
                  "s" : [ {
                     "value" : [ "","define ","ConceptA",": " ]
                  }, {
                     "r" : "236",
                     "s" : [ {
                        "value" : [ "Concept"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "codes",": " ]
                        }, {
                           "r" : "238",
                           "s" : [ {
                              "value" : [ "{ " ]
                           }, {
                              "r" : "239",
                              "s" : [ {
                                 "value" : [ "CodeA" ]
                              } ]
                           }, {
                              "value" : [ " }" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "display",": " ]
                        }, {
                           "r" : "242",
                           "s" : [ {
                              "value" : [ "'Test Concept'" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "236",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
               "classType" : "{urn:hl7-org:elm-types:r1}Concept",
               "type" : "Instance",
               "element" : [ {
                  "name" : "codes",
                  "value" : {
                     "localId" : "238",
                     "type" : "List",
                     "resultTypeSpecifier" : {
                        "localId" : "240",
                        "type" : "ListTypeSpecifier",
                        "elementType" : {
                           "localId" : "241",
                           "name" : "{urn:hl7-org:elm-types:r1}Code",
                           "type" : "NamedTypeSpecifier"
                        }
                     },
                     "element" : [ {
                        "localId" : "239",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                        "name" : "CodeA",
                        "type" : "ExpressionRef"
                     } ]
                  }
               }, {
                  "name" : "display",
                  "value" : {
                     "localId" : "242",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                     "valueType" : "{urn:hl7-org:elm-types:r1}String",
                     "value" : "Test Concept",
                     "type" : "Literal"
                  }
               } ]
            }
         }, {
            "localId" : "244",
            "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
            "name" : "Pharyngitis",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "244",
                  "s" : [ {
                     "value" : [ "","define ","Pharyngitis"," : " ]
                  }, {
                     "r" : "245",
                     "s" : [ {
                        "value" : [ "Condition"," {\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "code",": " ]
                        }, {
                           "r" : "247",
                           "s" : [ {
                              "value" : [ "\"Viral pharyngitis code\"" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ ",\n  " ]
                     }, {
                        "s" : [ {
                           "value" : [ "status",": " ]
                        }, {
                           "r" : "248",
                           "s" : [ {
                              "value" : [ "\"Active code\"" ]
                           } ]
                        } ]
                     }, {
                        "value" : [ "\n}" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "245",
               "resultTypeName" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "classType" : "{https://github.com/cqframework/cql-execution/simple}Condition",
               "type" : "Instance",
               "element" : [ {
                  "name" : "code",
                  "value" : {
                     "localId" : "247",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Viral pharyngitis code",
                     "type" : "CodeRef"
                  }
               }, {
                  "name" : "status",
                  "value" : {
                     "localId" : "248",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                     "name" : "Active code",
                     "type" : "CodeRef"
                  }
               } ]
            }
         }, {
            "localId" : "250",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
            "name" : "val",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "250",
                  "s" : [ {
                     "value" : [ "","define ","val",": " ]
                  }, {
                     "r" : "252",
                     "s" : [ {
                        "r" : "251",
                        "s" : [ {
                           "value" : [ "QuantityA" ]
                        } ]
                     }, {
                        "value" : [ "." ]
                     }, {
                        "r" : "252",
                        "s" : [ {
                           "value" : [ "value" ]
                        } ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "252",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
               "path" : "value",
               "type" : "Property",
               "source" : {
                  "localId" : "251",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                  "name" : "QuantityA",
                  "type" : "ExpressionRef"
               }
            }
         } ]
      }
   }
}

