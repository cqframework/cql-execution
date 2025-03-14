/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Expression
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Foo: 'Bar'
*/

module.exports['Expression'] = {
  "library" : {
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations",
      "signatureLevel" : "None"
    }, {
      "type" : "Annotation",
      "s" : {
        "s" : [ {
          "name" : "{urn:hl7-org:cql-annotations:r1}s",
          "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
          "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
          "value" : {
            "s" : [ "", "library TestSnippet version '1'" ]
          },
          "globalScope" : true
        } ],
        "r" : "212"
      }
    } ],
    "localId" : "0",
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
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "using " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "Simple" ]
                  },
                  "globalScope" : true
                } ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ " version '1.0.0'" ]
              },
              "globalScope" : true
            } ],
            "r" : "206"
          }
        } ],
        "localId" : "206",
        "localIdentifier" : "Simple",
        "uri" : "https://github.com/cqframework/cql-execution/simple",
        "version" : "1.0.0"
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
        "type" : "ExpressionDef",
        "localId" : "208",
        "expression" : {
          "type" : "SingletonFrom",
          "localId" : "209",
          "signature" : [ ],
          "operand" : {
            "type" : "Retrieve",
            "localId" : "207",
            "include" : [ ],
            "codeFilter" : [ ],
            "dateFilter" : [ ],
            "otherFilter" : [ ],
            "dataType" : "{https://github.com/cqframework/cql-execution/simple}Patient"
          }
        },
        "name" : "Patient",
        "context" : "Patient"
      }, {
        "type" : "ExpressionDef",
        "annotation" : [ {
          "type" : "Annotation",
          "s" : {
            "s" : [ {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ "", "define ", "Foo", ": " ]
              },
              "globalScope" : true
            }, {
              "name" : "{urn:hl7-org:cql-annotations:r1}s",
              "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
              "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
              "value" : {
                "s" : [ {
                  "name" : "{urn:hl7-org:cql-annotations:r1}s",
                  "declaredType" : "org.hl7.cql_annotations.r1.Narrative",
                  "scope" : "javax.xml.bind.JAXBElement$GlobalScope",
                  "value" : {
                    "s" : [ "'Bar'" ]
                  },
                  "globalScope" : true
                } ],
                "r" : "213"
              },
              "globalScope" : true
            } ],
            "r" : "212"
          }
        } ],
        "localId" : "212",
        "expression" : {
          "type" : "Literal",
          "localId" : "213",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Bar"
        },
        "name" : "Foo",
        "context" : "Patient",
        "accessLevel" : "Public"
      } ]
    }
  }
}

