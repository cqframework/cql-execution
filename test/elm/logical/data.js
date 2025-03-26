/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* And
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true and true
define TF: true and false
define TN: true and null
define FF: false and false
define FT: false and true
define FN: false and null
define NN: null and null
define NT: null and true
define NF: null and false
*/

module.exports['And'] = {
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
            "r" : "273",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TT",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "true"," and ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","TF",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "true"," and ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","TN",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "value" : [ "true"," and ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "230",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","FF",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "false"," and ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","FT",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "false"," and ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","FN",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "250",
                        "value" : [ "false"," and ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","NN",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "258",
                        "value" : [ "null"," and ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "261",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","NT",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "267",
                        "value" : [ "null"," and ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","NF",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "275",
                        "value" : [ "null"," and ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "And",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* Or
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true or true
define TF: true or false
define TN: true or null
define FF: false or false
define FT: false or true
define FN: false or null
define NN: null or null
define NT: null or true
define NF: null or false
*/

module.exports['Or'] = {
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
            "r" : "273",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TT",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "true"," or ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","TF",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "true"," or ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","TN",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "value" : [ "true"," or ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "230",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","FF",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "false"," or ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","FT",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "false"," or ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","FN",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "250",
                        "value" : [ "false"," or ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","NN",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "258",
                        "value" : [ "null"," or ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "261",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","NT",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "267",
                        "value" : [ "null"," or ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","NF",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "275",
                        "value" : [ "null"," or ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Or",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* XOr
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TT: true xor true
define TF: true xor false
define TN: true xor null
define FF: false xor false
define FT: false xor true
define FN: false xor null
define NN: null xor null
define NT: null xor true
define NF: null xor false
*/

module.exports['XOr'] = {
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
            "r" : "273",
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TT",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "true"," xor ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "216",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "217",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "215",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "219",
                  "s" : [ {
                     "value" : [ "","define ","TF",": " ]
                  }, {
                     "r" : "220",
                     "s" : [ {
                        "r" : "221",
                        "value" : [ "true"," xor ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "220",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "223",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "224",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "221",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "222",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "226",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "226",
                  "s" : [ {
                     "value" : [ "","define ","TN",": " ]
                  }, {
                     "r" : "227",
                     "s" : [ {
                        "r" : "228",
                        "value" : [ "true"," xor ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "227",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "231",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "232",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "228",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }, {
                  "localId" : "230",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "229",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "234",
                  "s" : [ {
                     "value" : [ "","define ","FF",": " ]
                  }, {
                     "r" : "235",
                     "s" : [ {
                        "r" : "236",
                        "value" : [ "false"," xor ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "235",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "238",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "239",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "236",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "237",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "241",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "241",
                  "s" : [ {
                     "value" : [ "","define ","FT",": " ]
                  }, {
                     "r" : "242",
                     "s" : [ {
                        "r" : "243",
                        "value" : [ "false"," xor ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "242",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "245",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "246",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "243",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "244",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "248",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "248",
                  "s" : [ {
                     "value" : [ "","define ","FN",": " ]
                  }, {
                     "r" : "249",
                     "s" : [ {
                        "r" : "250",
                        "value" : [ "false"," xor ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "249",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "253",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "254",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "250",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }, {
                  "localId" : "252",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "251",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "256",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NN",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "256",
                  "s" : [ {
                     "value" : [ "","define ","NN",": " ]
                  }, {
                     "r" : "257",
                     "s" : [ {
                        "r" : "258",
                        "value" : [ "null"," xor ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "257",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "262",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "263",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "260",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "258",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "261",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "259",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               } ]
            }
         }, {
            "localId" : "265",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NT",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "265",
                  "s" : [ {
                     "value" : [ "","define ","NT",": " ]
                  }, {
                     "r" : "266",
                     "s" : [ {
                        "r" : "267",
                        "value" : [ "null"," xor ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "266",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "270",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "271",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "269",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "267",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "268",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               } ]
            }
         }, {
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NF",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "273",
                  "s" : [ {
                     "value" : [ "","define ","NF",": " ]
                  }, {
                     "r" : "274",
                     "s" : [ {
                        "r" : "275",
                        "value" : [ "null"," xor ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "274",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Xor",
               "signature" : [ {
                  "localId" : "278",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               }, {
                  "localId" : "279",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : [ {
                  "localId" : "277",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "275",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }, {
                  "localId" : "276",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               } ]
            }
         } ]
      }
   }
}

/* Not
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NotTrue: not true
define NotFalse: not false
define NotNull: not null
*/

module.exports['Not'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","NotTrue",": " ]
                  }, {
                     "r" : "213",
                     "s" : [ {
                        "r" : "214",
                        "value" : [ "not ","true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "213",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "214",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","NotFalse",": " ]
                  }, {
                     "r" : "218",
                     "s" : [ {
                        "r" : "219",
                        "value" : [ "not ","false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "218",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "219",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NotNull",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","NotNull",": " ]
                  }, {
                     "r" : "223",
                     "s" : [ {
                        "r" : "224",
                        "value" : [ "not ","null" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "223",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "Not",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "224",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         } ]
      }
   }
}

/* IsTrue
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TrueIsTrue: true is true
define FalseIsTrue: false is true
define NullIsTrue: null is true
*/

module.exports['IsTrue'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TrueIsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TrueIsTrue",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "true"," is true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsTrue",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FalseIsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","FalseIsTrue",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "false"," is true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsTrue",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullIsTrue",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","NullIsTrue",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "null"," is true" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsTrue",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         } ]
      }
   }
}

/* IsFalse
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define TrueIsFalse: true is false
define FalseIsFalse: false is false
define NullIsFalse: null is false
*/

module.exports['IsFalse'] = {
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
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "TrueIsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "212",
                  "s" : [ {
                     "value" : [ "","define ","TrueIsFalse",": " ]
                  }, {
                     "r" : "214",
                     "s" : [ {
                        "r" : "213",
                        "value" : [ "true"," is false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "214",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsFalse",
               "signature" : [ {
                  "localId" : "215",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "213",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "true",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "FalseIsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "217",
                  "s" : [ {
                     "value" : [ "","define ","FalseIsFalse",": " ]
                  }, {
                     "r" : "219",
                     "s" : [ {
                        "r" : "218",
                        "value" : [ "false"," is false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "219",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsFalse",
               "signature" : [ {
                  "localId" : "220",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "218",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "valueType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "value" : "false",
                  "type" : "Literal"
               }
            }
         }, {
            "localId" : "222",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
            "name" : "NullIsFalse",
            "context" : "Patient",
            "accessLevel" : "Public",
            "annotation" : [ {
               "type" : "Annotation",
               "s" : {
                  "r" : "222",
                  "s" : [ {
                     "value" : [ "","define ","NullIsFalse",": " ]
                  }, {
                     "r" : "224",
                     "s" : [ {
                        "r" : "223",
                        "value" : [ "null"," is false" ]
                     } ]
                  } ]
               }
            } ],
            "expression" : {
               "localId" : "224",
               "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
               "type" : "IsFalse",
               "signature" : [ {
                  "localId" : "226",
                  "name" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "NamedTypeSpecifier"
               } ],
               "operand" : {
                  "localId" : "225",
                  "asType" : "{urn:hl7-org:elm-types:r1}Boolean",
                  "type" : "As",
                  "signature" : [ ],
                  "operand" : {
                     "localId" : "223",
                     "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                     "type" : "Null"
                  }
               }
            }
         } ]
      }
   }
}

