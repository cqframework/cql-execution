/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Tuple
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define tup: {a: 1, b: 2}
define emptyTup: {:}
*/

module.exports['Tuple'] = {
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
    "contexts" : {
      "def" : [ {
        "localId" : "211",
        "name" : "Patient",
        "annotation" : [ ]
      } ]
    },
    "statements" : {
      "def" : [ {
        "localId" : "209",
        "name" : "Patient",
        "context" : "Patient",
        "annotation" : [ ],
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "210",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "208",
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient",
            "annotation" : [ ],
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ]
          }
        }
      }, {
        "localId" : "214",
        "name" : "tup",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "tup", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "value" : [ "{" ]
              }, {
                "s" : [ {
                  "r" : "216",
                  "value" : [ "a", ": ", "1" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "s" : [ {
                  "r" : "217",
                  "value" : [ "b", ": ", "2" ]
                } ]
              }, {
                "value" : [ "}" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "223",
          "annotation" : [ ],
          "element" : [ {
            "localId" : "224",
            "name" : "a",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "225",
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
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            }
          } ]
        },
        "expression" : {
          "type" : "Tuple",
          "localId" : "215",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "218",
            "annotation" : [ ],
            "element" : [ {
              "localId" : "219",
              "name" : "a",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "220",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            }, {
              "localId" : "221",
              "name" : "b",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "222",
                "name" : "{urn:hl7-org:elm-types:r1}Integer",
                "annotation" : [ ]
              }
            } ]
          },
          "element" : [ {
            "name" : "a",
            "value" : {
              "type" : "Literal",
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }, {
            "name" : "b",
            "value" : {
              "type" : "Literal",
              "localId" : "217",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "2",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "230",
        "name" : "emptyTup",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "230",
            "s" : [ {
              "r" : "231",
              "value" : [ "", "define ", "emptyTup", ": ", "{:}" ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "TupleTypeSpecifier",
          "localId" : "233",
          "annotation" : [ ],
          "element" : [ ]
        },
        "expression" : {
          "type" : "Tuple",
          "localId" : "231",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "TupleTypeSpecifier",
            "localId" : "232",
            "annotation" : [ ],
            "element" : [ ]
          },
          "element" : [ ]
        }
      } ]
    }
  }
}

