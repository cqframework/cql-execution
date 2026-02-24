/*
   WARNING: This is a GENERATED file.  Do not manually edit!

   To generate this file:
       - Edit data.cql to add a CQL Snippet
       - From java dir: ./gradlew :cql-to-elm:generateTestData
*/

/* eslint-disable */

/* Concat
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define HelloWorld: 'Hello' + 'World'
define Sentence: 'The' + ' ' + 'quick' + ' ' + 'brown' + ' ' + 'fox' + ' ' + 'jumps' + ' '
                  + 'over' + ' ' + 'the' + ' ' + 'lazy' + ' ' + 'dog.'
define ConcatNull: 'Hello' + null
define Hello: 'Hello'
define World: 'World'
define HelloWorldVariables: Hello + World
define AndHelloWorld: 'Hello' & 'World'
define AndSentence: 'The' & ' ' & 'quick' & ' ' & 'brown' & ' ' & 'fox' & ' ' & 'jumps' & ' '
                  & 'over' & ' ' & 'the' & ' ' & 'lazy' & ' ' & 'dog.'
define AndConcatNull: 'Hello' & null
define AndHelloWorldVariables: Hello & World
*/

module.exports['Concat'] = {
  "library" : {
    "localId" : "0",
    "annotation" : [ {
      "type" : "CqlToElmInfo",
      "translatorVersion" : "4.2.0",
      "translatorOptions" : "EnableDateRangeOptimization,EnableAnnotations,EnableResultTypes",
      "signatureLevel" : "All"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 8,
      "startChar" : 15,
      "endLine" : 8,
      "endChar" : 21,
      "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 9,
      "startChar" : 15,
      "endLine" : 9,
      "endChar" : 21,
      "message" : "String literal 'World' matches the identifier World. Consider whether the identifier was intended instead.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 11,
      "startChar" : 23,
      "endLine" : 11,
      "endChar" : 29,
      "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 11,
      "startChar" : 33,
      "endLine" : 11,
      "endChar" : 39,
      "message" : "String literal 'World' matches the identifier World. Consider whether the identifier was intended instead.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "CqlToElmError",
      "libraryId" : "TestSnippet",
      "libraryVersion" : "1",
      "startLine" : 14,
      "startChar" : 23,
      "endLine" : 14,
      "endChar" : 29,
      "message" : "String literal 'Hello' matches the identifier Hello. Consider whether the identifier was intended instead.",
      "errorType" : "semantic",
      "errorSeverity" : "warning"
    }, {
      "type" : "Annotation",
      "t" : [ ],
      "s" : {
        "r" : "750",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "HelloWorld",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "HelloWorld", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "r" : "216",
                "s" : [ {
                  "value" : [ "'Hello'" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "218",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "World",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "225",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Sentence",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "225",
            "s" : [ {
              "value" : [ "", "define ", "Sentence", ": " ]
            }, {
              "r" : "323",
              "s" : [ {
                "r" : "318",
                "s" : [ {
                  "r" : "313",
                  "s" : [ {
                    "r" : "308",
                    "s" : [ {
                      "r" : "303",
                      "s" : [ {
                        "r" : "298",
                        "s" : [ {
                          "r" : "293",
                          "s" : [ {
                            "r" : "288",
                            "s" : [ {
                              "r" : "283",
                              "s" : [ {
                                "r" : "278",
                                "s" : [ {
                                  "r" : "273",
                                  "s" : [ {
                                    "r" : "268",
                                    "s" : [ {
                                      "r" : "263",
                                      "s" : [ {
                                        "r" : "258",
                                        "s" : [ {
                                          "r" : "253",
                                          "s" : [ {
                                            "r" : "248",
                                            "s" : [ {
                                              "r" : "242",
                                              "s" : [ {
                                                "value" : [ "'The'" ]
                                              } ]
                                            }, {
                                              "value" : [ " + " ]
                                            }, {
                                              "r" : "244",
                                              "s" : [ {
                                                "value" : [ "' '" ]
                                              } ]
                                            } ]
                                          }, {
                                            "value" : [ " + " ]
                                          }, {
                                            "r" : "249",
                                            "s" : [ {
                                              "value" : [ "'quick'" ]
                                            } ]
                                          } ]
                                        }, {
                                          "value" : [ " + " ]
                                        }, {
                                          "r" : "254",
                                          "s" : [ {
                                            "value" : [ "' '" ]
                                          } ]
                                        } ]
                                      }, {
                                        "value" : [ " + " ]
                                      }, {
                                        "r" : "259",
                                        "s" : [ {
                                          "value" : [ "'brown'" ]
                                        } ]
                                      } ]
                                    }, {
                                      "value" : [ " + " ]
                                    }, {
                                      "r" : "264",
                                      "s" : [ {
                                        "value" : [ "' '" ]
                                      } ]
                                    } ]
                                  }, {
                                    "value" : [ " + " ]
                                  }, {
                                    "r" : "269",
                                    "s" : [ {
                                      "value" : [ "'fox'" ]
                                    } ]
                                  } ]
                                }, {
                                  "value" : [ " + " ]
                                }, {
                                  "r" : "274",
                                  "s" : [ {
                                    "value" : [ "' '" ]
                                  } ]
                                } ]
                              }, {
                                "value" : [ " + " ]
                              }, {
                                "r" : "279",
                                "s" : [ {
                                  "value" : [ "'jumps'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ " + " ]
                            }, {
                              "r" : "284",
                              "s" : [ {
                                "value" : [ "' '" ]
                              } ]
                            } ]
                          }, {
                            "value" : [ "\n                  + " ]
                          }, {
                            "r" : "289",
                            "s" : [ {
                              "value" : [ "'over'" ]
                            } ]
                          } ]
                        }, {
                          "value" : [ " + " ]
                        }, {
                          "r" : "294",
                          "s" : [ {
                            "value" : [ "' '" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ " + " ]
                      }, {
                        "r" : "299",
                        "s" : [ {
                          "value" : [ "'the'" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " + " ]
                    }, {
                      "r" : "304",
                      "s" : [ {
                        "value" : [ "' '" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " + " ]
                  }, {
                    "r" : "309",
                    "s" : [ {
                      "value" : [ "'lazy'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " + " ]
                }, {
                  "r" : "314",
                  "s" : [ {
                    "value" : [ "' '" ]
                  } ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "319",
                "s" : [ {
                  "value" : [ "'dog.'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "323",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Concatenate",
            "localId" : "318",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : [ {
              "type" : "Concatenate",
              "localId" : "313",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : [ {
                "type" : "Concatenate",
                "localId" : "308",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : [ {
                  "type" : "Concatenate",
                  "localId" : "303",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ],
                  "signature" : [ ],
                  "operand" : [ {
                    "type" : "Concatenate",
                    "localId" : "298",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ],
                    "signature" : [ ],
                    "operand" : [ {
                      "type" : "Concatenate",
                      "localId" : "293",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ],
                      "signature" : [ ],
                      "operand" : [ {
                        "type" : "Concatenate",
                        "localId" : "288",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ],
                        "signature" : [ ],
                        "operand" : [ {
                          "type" : "Concatenate",
                          "localId" : "283",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ],
                          "signature" : [ ],
                          "operand" : [ {
                            "type" : "Concatenate",
                            "localId" : "278",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                            "annotation" : [ ],
                            "signature" : [ ],
                            "operand" : [ {
                              "type" : "Concatenate",
                              "localId" : "273",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ],
                              "signature" : [ ],
                              "operand" : [ {
                                "type" : "Concatenate",
                                "localId" : "268",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "annotation" : [ ],
                                "signature" : [ ],
                                "operand" : [ {
                                  "type" : "Concatenate",
                                  "localId" : "263",
                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ],
                                  "signature" : [ ],
                                  "operand" : [ {
                                    "type" : "Concatenate",
                                    "localId" : "258",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "annotation" : [ ],
                                    "signature" : [ ],
                                    "operand" : [ {
                                      "type" : "Concatenate",
                                      "localId" : "253",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ],
                                      "signature" : [ ],
                                      "operand" : [ {
                                        "type" : "Concatenate",
                                        "localId" : "248",
                                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                        "annotation" : [ ],
                                        "signature" : [ ],
                                        "operand" : [ {
                                          "type" : "Literal",
                                          "localId" : "242",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "The",
                                          "annotation" : [ ]
                                        }, {
                                          "type" : "Literal",
                                          "localId" : "244",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : " ",
                                          "annotation" : [ ]
                                        } ]
                                      }, {
                                        "type" : "Literal",
                                        "localId" : "249",
                                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                        "value" : "quick",
                                        "annotation" : [ ]
                                      } ]
                                    }, {
                                      "type" : "Literal",
                                      "localId" : "254",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                      "value" : " ",
                                      "annotation" : [ ]
                                    } ]
                                  }, {
                                    "type" : "Literal",
                                    "localId" : "259",
                                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                    "value" : "brown",
                                    "annotation" : [ ]
                                  } ]
                                }, {
                                  "type" : "Literal",
                                  "localId" : "264",
                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                  "value" : " ",
                                  "annotation" : [ ]
                                } ]
                              }, {
                                "type" : "Literal",
                                "localId" : "269",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "fox",
                                "annotation" : [ ]
                              } ]
                            }, {
                              "type" : "Literal",
                              "localId" : "274",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : " ",
                              "annotation" : [ ]
                            } ]
                          }, {
                            "type" : "Literal",
                            "localId" : "279",
                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                            "value" : "jumps",
                            "annotation" : [ ]
                          } ]
                        }, {
                          "type" : "Literal",
                          "localId" : "284",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : " ",
                          "annotation" : [ ]
                        } ]
                      }, {
                        "type" : "Literal",
                        "localId" : "289",
                        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                        "valueType" : "{urn:hl7-org:elm-types:r1}String",
                        "value" : "over",
                        "annotation" : [ ]
                      } ]
                    }, {
                      "type" : "Literal",
                      "localId" : "294",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : " ",
                      "annotation" : [ ]
                    } ]
                  }, {
                    "type" : "Literal",
                    "localId" : "299",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "the",
                    "annotation" : [ ]
                  } ]
                }, {
                  "type" : "Literal",
                  "localId" : "304",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : " ",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Literal",
                "localId" : "309",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                "value" : "lazy",
                "annotation" : [ ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "314",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : " ",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Literal",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "dog.",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "326",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ConcatNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "326",
            "s" : [ {
              "value" : [ "", "define ", "ConcatNull", ": " ]
            }, {
              "r" : "334",
              "s" : [ {
                "r" : "328",
                "s" : [ {
                  "value" : [ "'Hello'" ]
                } ]
              }, {
                "r" : "330",
                "value" : [ " + ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "334",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "328",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "331",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "330",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "337",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Hello",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "337",
            "s" : [ {
              "value" : [ "", "define ", "Hello", ": " ]
            }, {
              "r" : "338",
              "s" : [ {
                "value" : [ "'Hello'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "338",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "Hello",
          "annotation" : [ ]
        }
      }, {
        "localId" : "342",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "World",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "342",
            "s" : [ {
              "value" : [ "", "define ", "World", ": " ]
            }, {
              "r" : "343",
              "s" : [ {
                "value" : [ "'World'" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Literal",
          "localId" : "343",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "valueType" : "{urn:hl7-org:elm-types:r1}String",
          "value" : "World",
          "annotation" : [ ]
        }
      }, {
        "localId" : "347",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "HelloWorldVariables",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "347",
            "s" : [ {
              "value" : [ "", "define ", "HelloWorldVariables", ": " ]
            }, {
              "r" : "353",
              "s" : [ {
                "r" : "349",
                "s" : [ {
                  "value" : [ "Hello" ]
                } ]
              }, {
                "value" : [ " + " ]
              }, {
                "r" : "350",
                "s" : [ {
                  "value" : [ "World" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "353",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ ],
          "operand" : [ {
            "type" : "ExpressionRef",
            "localId" : "349",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "Hello",
            "annotation" : [ ]
          }, {
            "type" : "ExpressionRef",
            "localId" : "350",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "name" : "World",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "356",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "AndHelloWorld",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "356",
            "s" : [ {
              "value" : [ "", "define ", "AndHelloWorld", ": " ]
            }, {
              "r" : "357",
              "s" : [ {
                "r" : "358",
                "s" : [ {
                  "value" : [ "'Hello'" ]
                } ]
              }, {
                "value" : [ " & " ]
              }, {
                "r" : "360",
                "s" : [ {
                  "value" : [ "'World'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "357",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "378",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "379",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Coalesce",
            "localId" : "367",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "368",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "369",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "358",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Hello",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "362",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Coalesce",
            "localId" : "375",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "376",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "377",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "360",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "World",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "370",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "382",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "AndSentence",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "382",
            "s" : [ {
              "value" : [ "", "define ", "AndSentence", ": " ]
            }, {
              "r" : "383",
              "s" : [ {
                "r" : "384",
                "s" : [ {
                  "r" : "385",
                  "s" : [ {
                    "r" : "386",
                    "s" : [ {
                      "r" : "387",
                      "s" : [ {
                        "r" : "388",
                        "s" : [ {
                          "r" : "389",
                          "s" : [ {
                            "r" : "390",
                            "s" : [ {
                              "r" : "391",
                              "s" : [ {
                                "r" : "392",
                                "s" : [ {
                                  "r" : "393",
                                  "s" : [ {
                                    "r" : "394",
                                    "s" : [ {
                                      "r" : "395",
                                      "s" : [ {
                                        "r" : "396",
                                        "s" : [ {
                                          "r" : "397",
                                          "s" : [ {
                                            "r" : "398",
                                            "s" : [ {
                                              "r" : "399",
                                              "s" : [ {
                                                "value" : [ "'The'" ]
                                              } ]
                                            }, {
                                              "value" : [ " & " ]
                                            }, {
                                              "r" : "401",
                                              "s" : [ {
                                                "value" : [ "' '" ]
                                              } ]
                                            } ]
                                          }, {
                                            "value" : [ " & " ]
                                          }, {
                                            "r" : "421",
                                            "s" : [ {
                                              "value" : [ "'quick'" ]
                                            } ]
                                          } ]
                                        }, {
                                          "value" : [ " & " ]
                                        }, {
                                          "r" : "441",
                                          "s" : [ {
                                            "value" : [ "' '" ]
                                          } ]
                                        } ]
                                      }, {
                                        "value" : [ " & " ]
                                      }, {
                                        "r" : "461",
                                        "s" : [ {
                                          "value" : [ "'brown'" ]
                                        } ]
                                      } ]
                                    }, {
                                      "value" : [ " & " ]
                                    }, {
                                      "r" : "481",
                                      "s" : [ {
                                        "value" : [ "' '" ]
                                      } ]
                                    } ]
                                  }, {
                                    "value" : [ " & " ]
                                  }, {
                                    "r" : "501",
                                    "s" : [ {
                                      "value" : [ "'fox'" ]
                                    } ]
                                  } ]
                                }, {
                                  "value" : [ " & " ]
                                }, {
                                  "r" : "521",
                                  "s" : [ {
                                    "value" : [ "' '" ]
                                  } ]
                                } ]
                              }, {
                                "value" : [ " & " ]
                              }, {
                                "r" : "541",
                                "s" : [ {
                                  "value" : [ "'jumps'" ]
                                } ]
                              } ]
                            }, {
                              "value" : [ " & " ]
                            }, {
                              "r" : "561",
                              "s" : [ {
                                "value" : [ "' '" ]
                              } ]
                            } ]
                          }, {
                            "value" : [ "\n                  & " ]
                          }, {
                            "r" : "581",
                            "s" : [ {
                              "value" : [ "'over'" ]
                            } ]
                          } ]
                        }, {
                          "value" : [ " & " ]
                        }, {
                          "r" : "601",
                          "s" : [ {
                            "value" : [ "' '" ]
                          } ]
                        } ]
                      }, {
                        "value" : [ " & " ]
                      }, {
                        "r" : "621",
                        "s" : [ {
                          "value" : [ "'the'" ]
                        } ]
                      } ]
                    }, {
                      "value" : [ " & " ]
                    }, {
                      "r" : "641",
                      "s" : [ {
                        "value" : [ "' '" ]
                      } ]
                    } ]
                  }, {
                    "value" : [ " & " ]
                  }, {
                    "r" : "661",
                    "s" : [ {
                      "value" : [ "'lazy'" ]
                    } ]
                  } ]
                }, {
                  "value" : [ " & " ]
                }, {
                  "r" : "681",
                  "s" : [ {
                    "value" : [ "' '" ]
                  } ]
                } ]
              }, {
                "value" : [ " & " ]
              }, {
                "r" : "701",
                "s" : [ {
                  "value" : [ "'dog.'" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "383",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "719",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "720",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Coalesce",
            "localId" : "708",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "709",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "710",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Concatenate",
              "localId" : "384",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ {
                "type" : "NamedTypeSpecifier",
                "localId" : "699",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }, {
                "type" : "NamedTypeSpecifier",
                "localId" : "700",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              } ],
              "operand" : [ {
                "type" : "Coalesce",
                "localId" : "688",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "689",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "690",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Concatenate",
                  "localId" : "385",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ],
                  "signature" : [ {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "679",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  }, {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "680",
                    "name" : "{urn:hl7-org:elm-types:r1}String",
                    "annotation" : [ ]
                  } ],
                  "operand" : [ {
                    "type" : "Coalesce",
                    "localId" : "668",
                    "annotation" : [ ],
                    "signature" : [ {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "669",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }, {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "670",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    } ],
                    "operand" : [ {
                      "type" : "Concatenate",
                      "localId" : "386",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ],
                      "signature" : [ {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "659",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      }, {
                        "type" : "NamedTypeSpecifier",
                        "localId" : "660",
                        "name" : "{urn:hl7-org:elm-types:r1}String",
                        "annotation" : [ ]
                      } ],
                      "operand" : [ {
                        "type" : "Coalesce",
                        "localId" : "648",
                        "annotation" : [ ],
                        "signature" : [ {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "649",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }, {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "650",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        } ],
                        "operand" : [ {
                          "type" : "Concatenate",
                          "localId" : "387",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ],
                          "signature" : [ {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "639",
                            "name" : "{urn:hl7-org:elm-types:r1}String",
                            "annotation" : [ ]
                          }, {
                            "type" : "NamedTypeSpecifier",
                            "localId" : "640",
                            "name" : "{urn:hl7-org:elm-types:r1}String",
                            "annotation" : [ ]
                          } ],
                          "operand" : [ {
                            "type" : "Coalesce",
                            "localId" : "628",
                            "annotation" : [ ],
                            "signature" : [ {
                              "type" : "NamedTypeSpecifier",
                              "localId" : "629",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ]
                            }, {
                              "type" : "NamedTypeSpecifier",
                              "localId" : "630",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ]
                            } ],
                            "operand" : [ {
                              "type" : "Concatenate",
                              "localId" : "388",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ],
                              "signature" : [ {
                                "type" : "NamedTypeSpecifier",
                                "localId" : "619",
                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                "annotation" : [ ]
                              }, {
                                "type" : "NamedTypeSpecifier",
                                "localId" : "620",
                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                "annotation" : [ ]
                              } ],
                              "operand" : [ {
                                "type" : "Coalesce",
                                "localId" : "608",
                                "annotation" : [ ],
                                "signature" : [ {
                                  "type" : "NamedTypeSpecifier",
                                  "localId" : "609",
                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ]
                                }, {
                                  "type" : "NamedTypeSpecifier",
                                  "localId" : "610",
                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ]
                                } ],
                                "operand" : [ {
                                  "type" : "Concatenate",
                                  "localId" : "389",
                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ],
                                  "signature" : [ {
                                    "type" : "NamedTypeSpecifier",
                                    "localId" : "599",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "annotation" : [ ]
                                  }, {
                                    "type" : "NamedTypeSpecifier",
                                    "localId" : "600",
                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                    "annotation" : [ ]
                                  } ],
                                  "operand" : [ {
                                    "type" : "Coalesce",
                                    "localId" : "588",
                                    "annotation" : [ ],
                                    "signature" : [ {
                                      "type" : "NamedTypeSpecifier",
                                      "localId" : "589",
                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ]
                                    }, {
                                      "type" : "NamedTypeSpecifier",
                                      "localId" : "590",
                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ]
                                    } ],
                                    "operand" : [ {
                                      "type" : "Concatenate",
                                      "localId" : "390",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ],
                                      "signature" : [ {
                                        "type" : "NamedTypeSpecifier",
                                        "localId" : "579",
                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                        "annotation" : [ ]
                                      }, {
                                        "type" : "NamedTypeSpecifier",
                                        "localId" : "580",
                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                        "annotation" : [ ]
                                      } ],
                                      "operand" : [ {
                                        "type" : "Coalesce",
                                        "localId" : "568",
                                        "annotation" : [ ],
                                        "signature" : [ {
                                          "type" : "NamedTypeSpecifier",
                                          "localId" : "569",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "annotation" : [ ]
                                        }, {
                                          "type" : "NamedTypeSpecifier",
                                          "localId" : "570",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "annotation" : [ ]
                                        } ],
                                        "operand" : [ {
                                          "type" : "Concatenate",
                                          "localId" : "391",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "annotation" : [ ],
                                          "signature" : [ {
                                            "type" : "NamedTypeSpecifier",
                                            "localId" : "559",
                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                            "annotation" : [ ]
                                          }, {
                                            "type" : "NamedTypeSpecifier",
                                            "localId" : "560",
                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                            "annotation" : [ ]
                                          } ],
                                          "operand" : [ {
                                            "type" : "Coalesce",
                                            "localId" : "548",
                                            "annotation" : [ ],
                                            "signature" : [ {
                                              "type" : "NamedTypeSpecifier",
                                              "localId" : "549",
                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                              "annotation" : [ ]
                                            }, {
                                              "type" : "NamedTypeSpecifier",
                                              "localId" : "550",
                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                              "annotation" : [ ]
                                            } ],
                                            "operand" : [ {
                                              "type" : "Concatenate",
                                              "localId" : "392",
                                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                              "annotation" : [ ],
                                              "signature" : [ {
                                                "type" : "NamedTypeSpecifier",
                                                "localId" : "539",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "annotation" : [ ]
                                              }, {
                                                "type" : "NamedTypeSpecifier",
                                                "localId" : "540",
                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                "annotation" : [ ]
                                              } ],
                                              "operand" : [ {
                                                "type" : "Coalesce",
                                                "localId" : "528",
                                                "annotation" : [ ],
                                                "signature" : [ {
                                                  "type" : "NamedTypeSpecifier",
                                                  "localId" : "529",
                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                  "annotation" : [ ]
                                                }, {
                                                  "type" : "NamedTypeSpecifier",
                                                  "localId" : "530",
                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                  "annotation" : [ ]
                                                } ],
                                                "operand" : [ {
                                                  "type" : "Concatenate",
                                                  "localId" : "393",
                                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                  "annotation" : [ ],
                                                  "signature" : [ {
                                                    "type" : "NamedTypeSpecifier",
                                                    "localId" : "519",
                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                    "annotation" : [ ]
                                                  }, {
                                                    "type" : "NamedTypeSpecifier",
                                                    "localId" : "520",
                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                    "annotation" : [ ]
                                                  } ],
                                                  "operand" : [ {
                                                    "type" : "Coalesce",
                                                    "localId" : "508",
                                                    "annotation" : [ ],
                                                    "signature" : [ {
                                                      "type" : "NamedTypeSpecifier",
                                                      "localId" : "509",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "annotation" : [ ]
                                                    }, {
                                                      "type" : "NamedTypeSpecifier",
                                                      "localId" : "510",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "annotation" : [ ]
                                                    } ],
                                                    "operand" : [ {
                                                      "type" : "Concatenate",
                                                      "localId" : "394",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "annotation" : [ ],
                                                      "signature" : [ {
                                                        "type" : "NamedTypeSpecifier",
                                                        "localId" : "499",
                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                        "annotation" : [ ]
                                                      }, {
                                                        "type" : "NamedTypeSpecifier",
                                                        "localId" : "500",
                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                        "annotation" : [ ]
                                                      } ],
                                                      "operand" : [ {
                                                        "type" : "Coalesce",
                                                        "localId" : "488",
                                                        "annotation" : [ ],
                                                        "signature" : [ {
                                                          "type" : "NamedTypeSpecifier",
                                                          "localId" : "489",
                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                          "annotation" : [ ]
                                                        }, {
                                                          "type" : "NamedTypeSpecifier",
                                                          "localId" : "490",
                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                          "annotation" : [ ]
                                                        } ],
                                                        "operand" : [ {
                                                          "type" : "Concatenate",
                                                          "localId" : "395",
                                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                          "annotation" : [ ],
                                                          "signature" : [ {
                                                            "type" : "NamedTypeSpecifier",
                                                            "localId" : "479",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "annotation" : [ ]
                                                          }, {
                                                            "type" : "NamedTypeSpecifier",
                                                            "localId" : "480",
                                                            "name" : "{urn:hl7-org:elm-types:r1}String",
                                                            "annotation" : [ ]
                                                          } ],
                                                          "operand" : [ {
                                                            "type" : "Coalesce",
                                                            "localId" : "468",
                                                            "annotation" : [ ],
                                                            "signature" : [ {
                                                              "type" : "NamedTypeSpecifier",
                                                              "localId" : "469",
                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                              "annotation" : [ ]
                                                            }, {
                                                              "type" : "NamedTypeSpecifier",
                                                              "localId" : "470",
                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                              "annotation" : [ ]
                                                            } ],
                                                            "operand" : [ {
                                                              "type" : "Concatenate",
                                                              "localId" : "396",
                                                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                              "annotation" : [ ],
                                                              "signature" : [ {
                                                                "type" : "NamedTypeSpecifier",
                                                                "localId" : "459",
                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                "annotation" : [ ]
                                                              }, {
                                                                "type" : "NamedTypeSpecifier",
                                                                "localId" : "460",
                                                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                "annotation" : [ ]
                                                              } ],
                                                              "operand" : [ {
                                                                "type" : "Coalesce",
                                                                "localId" : "448",
                                                                "annotation" : [ ],
                                                                "signature" : [ {
                                                                  "type" : "NamedTypeSpecifier",
                                                                  "localId" : "449",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "annotation" : [ ]
                                                                }, {
                                                                  "type" : "NamedTypeSpecifier",
                                                                  "localId" : "450",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "annotation" : [ ]
                                                                } ],
                                                                "operand" : [ {
                                                                  "type" : "Concatenate",
                                                                  "localId" : "397",
                                                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "annotation" : [ ],
                                                                  "signature" : [ {
                                                                    "type" : "NamedTypeSpecifier",
                                                                    "localId" : "439",
                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                    "annotation" : [ ]
                                                                  }, {
                                                                    "type" : "NamedTypeSpecifier",
                                                                    "localId" : "440",
                                                                    "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                    "annotation" : [ ]
                                                                  } ],
                                                                  "operand" : [ {
                                                                    "type" : "Coalesce",
                                                                    "localId" : "428",
                                                                    "annotation" : [ ],
                                                                    "signature" : [ {
                                                                      "type" : "NamedTypeSpecifier",
                                                                      "localId" : "429",
                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "annotation" : [ ]
                                                                    }, {
                                                                      "type" : "NamedTypeSpecifier",
                                                                      "localId" : "430",
                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "annotation" : [ ]
                                                                    } ],
                                                                    "operand" : [ {
                                                                      "type" : "Concatenate",
                                                                      "localId" : "398",
                                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "annotation" : [ ],
                                                                      "signature" : [ {
                                                                        "type" : "NamedTypeSpecifier",
                                                                        "localId" : "419",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "annotation" : [ ]
                                                                      }, {
                                                                        "type" : "NamedTypeSpecifier",
                                                                        "localId" : "420",
                                                                        "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                        "annotation" : [ ]
                                                                      } ],
                                                                      "operand" : [ {
                                                                        "type" : "Coalesce",
                                                                        "localId" : "408",
                                                                        "annotation" : [ ],
                                                                        "signature" : [ {
                                                                          "type" : "NamedTypeSpecifier",
                                                                          "localId" : "409",
                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "annotation" : [ ]
                                                                        }, {
                                                                          "type" : "NamedTypeSpecifier",
                                                                          "localId" : "410",
                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "annotation" : [ ]
                                                                        } ],
                                                                        "operand" : [ {
                                                                          "type" : "Literal",
                                                                          "localId" : "399",
                                                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "value" : "The",
                                                                          "annotation" : [ ]
                                                                        }, {
                                                                          "type" : "Literal",
                                                                          "localId" : "403",
                                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "value" : "",
                                                                          "annotation" : [ ]
                                                                        } ]
                                                                      }, {
                                                                        "type" : "Coalesce",
                                                                        "localId" : "416",
                                                                        "annotation" : [ ],
                                                                        "signature" : [ {
                                                                          "type" : "NamedTypeSpecifier",
                                                                          "localId" : "417",
                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "annotation" : [ ]
                                                                        }, {
                                                                          "type" : "NamedTypeSpecifier",
                                                                          "localId" : "418",
                                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "annotation" : [ ]
                                                                        } ],
                                                                        "operand" : [ {
                                                                          "type" : "Literal",
                                                                          "localId" : "401",
                                                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "value" : " ",
                                                                          "annotation" : [ ]
                                                                        }, {
                                                                          "type" : "Literal",
                                                                          "localId" : "411",
                                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                          "value" : "",
                                                                          "annotation" : [ ]
                                                                        } ]
                                                                      } ]
                                                                    }, {
                                                                      "type" : "Literal",
                                                                      "localId" : "423",
                                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "value" : "",
                                                                      "annotation" : [ ]
                                                                    } ]
                                                                  }, {
                                                                    "type" : "Coalesce",
                                                                    "localId" : "436",
                                                                    "annotation" : [ ],
                                                                    "signature" : [ {
                                                                      "type" : "NamedTypeSpecifier",
                                                                      "localId" : "437",
                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "annotation" : [ ]
                                                                    }, {
                                                                      "type" : "NamedTypeSpecifier",
                                                                      "localId" : "438",
                                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "annotation" : [ ]
                                                                    } ],
                                                                    "operand" : [ {
                                                                      "type" : "Literal",
                                                                      "localId" : "421",
                                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "value" : "quick",
                                                                      "annotation" : [ ]
                                                                    }, {
                                                                      "type" : "Literal",
                                                                      "localId" : "431",
                                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                      "value" : "",
                                                                      "annotation" : [ ]
                                                                    } ]
                                                                  } ]
                                                                }, {
                                                                  "type" : "Literal",
                                                                  "localId" : "443",
                                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "value" : "",
                                                                  "annotation" : [ ]
                                                                } ]
                                                              }, {
                                                                "type" : "Coalesce",
                                                                "localId" : "456",
                                                                "annotation" : [ ],
                                                                "signature" : [ {
                                                                  "type" : "NamedTypeSpecifier",
                                                                  "localId" : "457",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "annotation" : [ ]
                                                                }, {
                                                                  "type" : "NamedTypeSpecifier",
                                                                  "localId" : "458",
                                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "annotation" : [ ]
                                                                } ],
                                                                "operand" : [ {
                                                                  "type" : "Literal",
                                                                  "localId" : "441",
                                                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "value" : " ",
                                                                  "annotation" : [ ]
                                                                }, {
                                                                  "type" : "Literal",
                                                                  "localId" : "451",
                                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                                  "value" : "",
                                                                  "annotation" : [ ]
                                                                } ]
                                                              } ]
                                                            }, {
                                                              "type" : "Literal",
                                                              "localId" : "463",
                                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                              "value" : "",
                                                              "annotation" : [ ]
                                                            } ]
                                                          }, {
                                                            "type" : "Coalesce",
                                                            "localId" : "476",
                                                            "annotation" : [ ],
                                                            "signature" : [ {
                                                              "type" : "NamedTypeSpecifier",
                                                              "localId" : "477",
                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                              "annotation" : [ ]
                                                            }, {
                                                              "type" : "NamedTypeSpecifier",
                                                              "localId" : "478",
                                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                                              "annotation" : [ ]
                                                            } ],
                                                            "operand" : [ {
                                                              "type" : "Literal",
                                                              "localId" : "461",
                                                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                              "value" : "brown",
                                                              "annotation" : [ ]
                                                            }, {
                                                              "type" : "Literal",
                                                              "localId" : "471",
                                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                              "value" : "",
                                                              "annotation" : [ ]
                                                            } ]
                                                          } ]
                                                        }, {
                                                          "type" : "Literal",
                                                          "localId" : "483",
                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                          "value" : "",
                                                          "annotation" : [ ]
                                                        } ]
                                                      }, {
                                                        "type" : "Coalesce",
                                                        "localId" : "496",
                                                        "annotation" : [ ],
                                                        "signature" : [ {
                                                          "type" : "NamedTypeSpecifier",
                                                          "localId" : "497",
                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                          "annotation" : [ ]
                                                        }, {
                                                          "type" : "NamedTypeSpecifier",
                                                          "localId" : "498",
                                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                                          "annotation" : [ ]
                                                        } ],
                                                        "operand" : [ {
                                                          "type" : "Literal",
                                                          "localId" : "481",
                                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                          "value" : " ",
                                                          "annotation" : [ ]
                                                        }, {
                                                          "type" : "Literal",
                                                          "localId" : "491",
                                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                          "value" : "",
                                                          "annotation" : [ ]
                                                        } ]
                                                      } ]
                                                    }, {
                                                      "type" : "Literal",
                                                      "localId" : "503",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "",
                                                      "annotation" : [ ]
                                                    } ]
                                                  }, {
                                                    "type" : "Coalesce",
                                                    "localId" : "516",
                                                    "annotation" : [ ],
                                                    "signature" : [ {
                                                      "type" : "NamedTypeSpecifier",
                                                      "localId" : "517",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "annotation" : [ ]
                                                    }, {
                                                      "type" : "NamedTypeSpecifier",
                                                      "localId" : "518",
                                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                                      "annotation" : [ ]
                                                    } ],
                                                    "operand" : [ {
                                                      "type" : "Literal",
                                                      "localId" : "501",
                                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "fox",
                                                      "annotation" : [ ]
                                                    }, {
                                                      "type" : "Literal",
                                                      "localId" : "511",
                                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                      "value" : "",
                                                      "annotation" : [ ]
                                                    } ]
                                                  } ]
                                                }, {
                                                  "type" : "Literal",
                                                  "localId" : "523",
                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                  "value" : "",
                                                  "annotation" : [ ]
                                                } ]
                                              }, {
                                                "type" : "Coalesce",
                                                "localId" : "536",
                                                "annotation" : [ ],
                                                "signature" : [ {
                                                  "type" : "NamedTypeSpecifier",
                                                  "localId" : "537",
                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                  "annotation" : [ ]
                                                }, {
                                                  "type" : "NamedTypeSpecifier",
                                                  "localId" : "538",
                                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                                  "annotation" : [ ]
                                                } ],
                                                "operand" : [ {
                                                  "type" : "Literal",
                                                  "localId" : "521",
                                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                  "value" : " ",
                                                  "annotation" : [ ]
                                                }, {
                                                  "type" : "Literal",
                                                  "localId" : "531",
                                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                                  "value" : "",
                                                  "annotation" : [ ]
                                                } ]
                                              } ]
                                            }, {
                                              "type" : "Literal",
                                              "localId" : "543",
                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                              "value" : "",
                                              "annotation" : [ ]
                                            } ]
                                          }, {
                                            "type" : "Coalesce",
                                            "localId" : "556",
                                            "annotation" : [ ],
                                            "signature" : [ {
                                              "type" : "NamedTypeSpecifier",
                                              "localId" : "557",
                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                              "annotation" : [ ]
                                            }, {
                                              "type" : "NamedTypeSpecifier",
                                              "localId" : "558",
                                              "name" : "{urn:hl7-org:elm-types:r1}String",
                                              "annotation" : [ ]
                                            } ],
                                            "operand" : [ {
                                              "type" : "Literal",
                                              "localId" : "541",
                                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                              "value" : "jumps",
                                              "annotation" : [ ]
                                            }, {
                                              "type" : "Literal",
                                              "localId" : "551",
                                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                              "value" : "",
                                              "annotation" : [ ]
                                            } ]
                                          } ]
                                        }, {
                                          "type" : "Literal",
                                          "localId" : "563",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "",
                                          "annotation" : [ ]
                                        } ]
                                      }, {
                                        "type" : "Coalesce",
                                        "localId" : "576",
                                        "annotation" : [ ],
                                        "signature" : [ {
                                          "type" : "NamedTypeSpecifier",
                                          "localId" : "577",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "annotation" : [ ]
                                        }, {
                                          "type" : "NamedTypeSpecifier",
                                          "localId" : "578",
                                          "name" : "{urn:hl7-org:elm-types:r1}String",
                                          "annotation" : [ ]
                                        } ],
                                        "operand" : [ {
                                          "type" : "Literal",
                                          "localId" : "561",
                                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : " ",
                                          "annotation" : [ ]
                                        }, {
                                          "type" : "Literal",
                                          "localId" : "571",
                                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                          "value" : "",
                                          "annotation" : [ ]
                                        } ]
                                      } ]
                                    }, {
                                      "type" : "Literal",
                                      "localId" : "583",
                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                      "value" : "",
                                      "annotation" : [ ]
                                    } ]
                                  }, {
                                    "type" : "Coalesce",
                                    "localId" : "596",
                                    "annotation" : [ ],
                                    "signature" : [ {
                                      "type" : "NamedTypeSpecifier",
                                      "localId" : "597",
                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ]
                                    }, {
                                      "type" : "NamedTypeSpecifier",
                                      "localId" : "598",
                                      "name" : "{urn:hl7-org:elm-types:r1}String",
                                      "annotation" : [ ]
                                    } ],
                                    "operand" : [ {
                                      "type" : "Literal",
                                      "localId" : "581",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                      "value" : "over",
                                      "annotation" : [ ]
                                    }, {
                                      "type" : "Literal",
                                      "localId" : "591",
                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                      "value" : "",
                                      "annotation" : [ ]
                                    } ]
                                  } ]
                                }, {
                                  "type" : "Literal",
                                  "localId" : "603",
                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                  "value" : "",
                                  "annotation" : [ ]
                                } ]
                              }, {
                                "type" : "Coalesce",
                                "localId" : "616",
                                "annotation" : [ ],
                                "signature" : [ {
                                  "type" : "NamedTypeSpecifier",
                                  "localId" : "617",
                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ]
                                }, {
                                  "type" : "NamedTypeSpecifier",
                                  "localId" : "618",
                                  "name" : "{urn:hl7-org:elm-types:r1}String",
                                  "annotation" : [ ]
                                } ],
                                "operand" : [ {
                                  "type" : "Literal",
                                  "localId" : "601",
                                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                  "value" : " ",
                                  "annotation" : [ ]
                                }, {
                                  "type" : "Literal",
                                  "localId" : "611",
                                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                  "value" : "",
                                  "annotation" : [ ]
                                } ]
                              } ]
                            }, {
                              "type" : "Literal",
                              "localId" : "623",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "",
                              "annotation" : [ ]
                            } ]
                          }, {
                            "type" : "Coalesce",
                            "localId" : "636",
                            "annotation" : [ ],
                            "signature" : [ {
                              "type" : "NamedTypeSpecifier",
                              "localId" : "637",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ]
                            }, {
                              "type" : "NamedTypeSpecifier",
                              "localId" : "638",
                              "name" : "{urn:hl7-org:elm-types:r1}String",
                              "annotation" : [ ]
                            } ],
                            "operand" : [ {
                              "type" : "Literal",
                              "localId" : "621",
                              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "the",
                              "annotation" : [ ]
                            }, {
                              "type" : "Literal",
                              "localId" : "631",
                              "valueType" : "{urn:hl7-org:elm-types:r1}String",
                              "value" : "",
                              "annotation" : [ ]
                            } ]
                          } ]
                        }, {
                          "type" : "Literal",
                          "localId" : "643",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "",
                          "annotation" : [ ]
                        } ]
                      }, {
                        "type" : "Coalesce",
                        "localId" : "656",
                        "annotation" : [ ],
                        "signature" : [ {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "657",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        }, {
                          "type" : "NamedTypeSpecifier",
                          "localId" : "658",
                          "name" : "{urn:hl7-org:elm-types:r1}String",
                          "annotation" : [ ]
                        } ],
                        "operand" : [ {
                          "type" : "Literal",
                          "localId" : "641",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : " ",
                          "annotation" : [ ]
                        }, {
                          "type" : "Literal",
                          "localId" : "651",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "",
                          "annotation" : [ ]
                        } ]
                      } ]
                    }, {
                      "type" : "Literal",
                      "localId" : "663",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "",
                      "annotation" : [ ]
                    } ]
                  }, {
                    "type" : "Coalesce",
                    "localId" : "676",
                    "annotation" : [ ],
                    "signature" : [ {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "677",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    }, {
                      "type" : "NamedTypeSpecifier",
                      "localId" : "678",
                      "name" : "{urn:hl7-org:elm-types:r1}String",
                      "annotation" : [ ]
                    } ],
                    "operand" : [ {
                      "type" : "Literal",
                      "localId" : "661",
                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "lazy",
                      "annotation" : [ ]
                    }, {
                      "type" : "Literal",
                      "localId" : "671",
                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                      "value" : "",
                      "annotation" : [ ]
                    } ]
                  } ]
                }, {
                  "type" : "Literal",
                  "localId" : "683",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "annotation" : [ ]
                } ]
              }, {
                "type" : "Coalesce",
                "localId" : "696",
                "annotation" : [ ],
                "signature" : [ {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "697",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                }, {
                  "type" : "NamedTypeSpecifier",
                  "localId" : "698",
                  "name" : "{urn:hl7-org:elm-types:r1}String",
                  "annotation" : [ ]
                } ],
                "operand" : [ {
                  "type" : "Literal",
                  "localId" : "681",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : " ",
                  "annotation" : [ ]
                }, {
                  "type" : "Literal",
                  "localId" : "691",
                  "valueType" : "{urn:hl7-org:elm-types:r1}String",
                  "value" : "",
                  "annotation" : [ ]
                } ]
              } ]
            }, {
              "type" : "Literal",
              "localId" : "703",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Coalesce",
            "localId" : "716",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "717",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "718",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "701",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "dog.",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "711",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "723",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "AndConcatNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "723",
            "s" : [ {
              "value" : [ "", "define ", "AndConcatNull", ": " ]
            }, {
              "r" : "724",
              "s" : [ {
                "r" : "725",
                "s" : [ {
                  "value" : [ "'Hello'" ]
                } ]
              }, {
                "r" : "727",
                "value" : [ " & ", "null" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "724",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "746",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "747",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Coalesce",
            "localId" : "733",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "734",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "735",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "Literal",
              "localId" : "725",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "Hello",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "728",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Coalesce",
            "localId" : "742",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "744",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "745",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "As",
              "localId" : "743",
              "asType" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "727",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "736",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          } ]
        }
      }, {
        "localId" : "750",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "AndHelloWorldVariables",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "750",
            "s" : [ {
              "value" : [ "", "define ", "AndHelloWorldVariables", ": " ]
            }, {
              "r" : "751",
              "s" : [ {
                "r" : "752",
                "s" : [ {
                  "value" : [ "Hello" ]
                } ]
              }, {
                "value" : [ " & " ]
              }, {
                "r" : "753",
                "s" : [ {
                  "value" : [ "World" ]
                } ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Concatenate",
          "localId" : "751",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "770",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "771",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Coalesce",
            "localId" : "759",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "760",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "761",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "752",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "Hello",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "754",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          }, {
            "type" : "Coalesce",
            "localId" : "767",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "768",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }, {
              "type" : "NamedTypeSpecifier",
              "localId" : "769",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            } ],
            "operand" : [ {
              "type" : "ExpressionRef",
              "localId" : "753",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "World",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "762",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "",
              "annotation" : [ ]
            } ]
          } ]
        }
      } ]
    }
  }
}

/* Combine
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define NoSeparator: Combine({ 'abc', 'def', 'ghi', 'jkl' })
define Separator: Combine({ 'abc', 'def', 'ghi', 'jkl' }, ';')
define CombineNull: Combine(null, ';')
define CombineNullItem: Combine({ 'abc', 'def', null, 'jkl' }, ';')
define CombineOneNullItem: Combine({null}, ';')
define CombineEmptyNull: Combine({}, ';')
*/

module.exports['Combine'] = {
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
        "r" : "334",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NoSeparator",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "NoSeparator", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "value" : [ "Combine", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "216",
                  "s" : [ {
                    "value" : [ "'abc'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "218",
                  "s" : [ {
                    "value" : [ "'def'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "220",
                  "s" : [ {
                    "value" : [ "'ghi'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "222",
                  "s" : [ {
                    "value" : [ "'jkl'" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "231",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "232",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ],
          "source" : {
            "type" : "List",
            "localId" : "215",
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
              "localId" : "216",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "abc",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "218",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "def",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "220",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "ghi",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "222",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "jkl",
              "annotation" : [ ]
            } ]
          }
        }
      }, {
        "localId" : "235",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Separator",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "235",
            "s" : [ {
              "value" : [ "", "define ", "Separator", ": " ]
            }, {
              "r" : "254",
              "s" : [ {
                "value" : [ "Combine", "(" ]
              }, {
                "r" : "236",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "237",
                  "s" : [ {
                    "value" : [ "'abc'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "239",
                  "s" : [ {
                    "value" : [ "'def'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "241",
                  "s" : [ {
                    "value" : [ "'ghi'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "243",
                  "s" : [ {
                    "value" : [ "'jkl'" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "247",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "254",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "255",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "256",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "List",
            "localId" : "236",
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
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "237",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "abc",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "239",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "def",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "241",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "ghi",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "jkl",
              "annotation" : [ ]
            } ]
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "260",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CombineNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "260",
            "s" : [ {
              "value" : [ "", "define ", "CombineNull", ": " ]
            }, {
              "r" : "272",
              "s" : [ {
                "r" : "261",
                "value" : [ "Combine", "(", "null", ", " ]
              }, {
                "r" : "262",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "272",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "276",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "277",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "278",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "As",
            "localId" : "273",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "261",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "274",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "275",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            }
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "281",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CombineNullItem",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "281",
            "s" : [ {
              "value" : [ "", "define ", "CombineNullItem", ": " ]
            }, {
              "r" : "300",
              "s" : [ {
                "value" : [ "Combine", "(" ]
              }, {
                "r" : "282",
                "s" : [ {
                  "value" : [ "{ " ]
                }, {
                  "r" : "283",
                  "s" : [ {
                    "value" : [ "'abc'" ]
                  } ]
                }, {
                  "value" : [ ", " ]
                }, {
                  "r" : "285",
                  "s" : [ {
                    "value" : [ "'def'" ]
                  } ]
                }, {
                  "r" : "287",
                  "value" : [ ", ", "null", ", " ]
                }, {
                  "r" : "288",
                  "s" : [ {
                    "value" : [ "'jkl'" ]
                  } ]
                }, {
                  "value" : [ " }" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "293",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "300",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "301",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "302",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "303",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "List",
            "localId" : "282",
            "annotation" : [ ],
            "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "localId" : "291",
              "annotation" : [ ],
              "elementType" : {
                "type" : "NamedTypeSpecifier",
                "localId" : "292",
                "name" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ]
              }
            },
            "element" : [ {
              "type" : "Literal",
              "localId" : "283",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "abc",
              "annotation" : [ ]
            }, {
              "type" : "Literal",
              "localId" : "285",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "def",
              "annotation" : [ ]
            }, {
              "type" : "As",
              "localId" : "290",
              "asType" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ],
              "signature" : [ ],
              "operand" : {
                "type" : "Null",
                "localId" : "287",
                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                "annotation" : [ ]
              }
            }, {
              "type" : "Literal",
              "localId" : "288",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "valueType" : "{urn:hl7-org:elm-types:r1}String",
              "value" : "jkl",
              "annotation" : [ ]
            } ]
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "293",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "306",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CombineOneNullItem",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "306",
            "s" : [ {
              "value" : [ "", "define ", "CombineOneNullItem", ": " ]
            }, {
              "r" : "323",
              "s" : [ {
                "value" : [ "Combine", "(" ]
              }, {
                "r" : "307",
                "s" : [ {
                  "r" : "308",
                  "value" : [ "{", "null", "}" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "311",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "323",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "329",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "330",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "324",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "325",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "307",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "309",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "310",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ {
                  "type" : "Null",
                  "localId" : "308",
                  "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
                  "annotation" : [ ]
                } ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "326",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "As",
                "localId" : "328",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "327",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "311",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "334",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CombineEmptyNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "334",
            "s" : [ {
              "value" : [ "", "define ", "CombineEmptyNull", ": " ]
            }, {
              "r" : "350",
              "s" : [ {
                "r" : "335",
                "value" : [ "Combine", "(", "{}", ", " ]
              }, {
                "r" : "338",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Combine",
          "localId" : "350",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "ListTypeSpecifier",
            "localId" : "356",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "357",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "358",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "source" : {
            "type" : "Query",
            "localId" : "351",
            "annotation" : [ ],
            "source" : [ {
              "localId" : "352",
              "alias" : "X",
              "annotation" : [ ],
              "expression" : {
                "type" : "List",
                "localId" : "335",
                "annotation" : [ ],
                "resultTypeSpecifier" : {
                  "type" : "ListTypeSpecifier",
                  "localId" : "336",
                  "annotation" : [ ],
                  "elementType" : {
                    "type" : "NamedTypeSpecifier",
                    "localId" : "337",
                    "name" : "{urn:hl7-org:elm-types:r1}Any",
                    "annotation" : [ ]
                  }
                },
                "element" : [ ]
              }
            } ],
            "let" : [ ],
            "relationship" : [ ],
            "return" : {
              "localId" : "353",
              "distinct" : false,
              "annotation" : [ ],
              "expression" : {
                "type" : "As",
                "localId" : "355",
                "asType" : "{urn:hl7-org:elm-types:r1}String",
                "annotation" : [ ],
                "signature" : [ ],
                "operand" : {
                  "type" : "AliasRef",
                  "localId" : "354",
                  "name" : "X",
                  "annotation" : [ ]
                }
              }
            }
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "338",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      } ]
    }
  }
}

/* Split
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define CommaSeparated: Split('a,b,c,,1,2,3', ',')
define SeparatorNotUsed: Split('a,b,c,,1,2,3', ';')
define SeparateNull: Split(null, ',')
define SeparateUsingNull: Split('a,b,c', null)
*/

module.exports['Split'] = {
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
        "r" : "269",
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
        "name" : "CommaSeparated",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "CommaSeparated", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "Split", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'a,b,c,,1,2,3'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "','" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "228",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Split",
          "localId" : "223",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "226",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "227",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "a,b,c,,1,2,3",
            "annotation" : [ ]
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ",",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "232",
        "name" : "SeparatorNotUsed",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "SeparatorNotUsed", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "value" : [ "Split", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "'a,b,c,,1,2,3'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "';'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "246",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Split",
          "localId" : "241",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "244",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "a,b,c,,1,2,3",
            "annotation" : [ ]
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ";",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "250",
        "name" : "SeparateNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "SeparateNull", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "r" : "251",
                "value" : [ "Split", "(", "null", ", " ]
              }, {
                "r" : "252",
                "s" : [ {
                  "value" : [ "','" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "265",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Split",
          "localId" : "259",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "263",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "262",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "As",
            "localId" : "260",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "251",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "separator" : {
            "type" : "Literal",
            "localId" : "252",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ",",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "269",
        "name" : "SeparateUsingNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "269",
            "s" : [ {
              "value" : [ "", "define ", "SeparateUsingNull", ": " ]
            }, {
              "r" : "278",
              "s" : [ {
                "value" : [ "Split", "(" ]
              }, {
                "r" : "270",
                "s" : [ {
                  "value" : [ "'a,b,c'" ]
                } ]
              }, {
                "r" : "272",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "284",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "Split",
          "localId" : "278",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "282",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "283",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "281",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "a,b,c",
            "annotation" : [ ]
          },
          "separator" : {
            "type" : "As",
            "localId" : "279",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "272",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* SplitOnMatches
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define SplitOnMatchesListReturn: SplitOnMatches('foo 1,2three bar', '\\d,\\d\\w+')
define SplitOnMatchesOriginalString: SplitOnMatches('1,2three', '\\w,\\w+')
define SplitOnMatchesNoMatch: SplitOnMatches('foobar', '\\d')
define SplitOnMatchesIsNullFirst: SplitOnMatches(null, '\\w+')
define SplitOnMatchesIsNullSecond: SplitOnMatches('12three', null)
define SplitOnMatchesAllNull: SplitOnMatches(null, null)
*/

module.exports['SplitOnMatches'] = {
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
        "r" : "306",
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
        "name" : "SplitOnMatchesListReturn",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesListReturn", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "SplitOnMatches", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'foo 1,2three bar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'\\\\d,\\\\d\\\\w+'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "228",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "223",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "226",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "227",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foo 1,2three bar",
            "annotation" : [ ]
          },
          "separatorPattern" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\d,\\d\\w+",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "232",
        "name" : "SplitOnMatchesOriginalString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesOriginalString", ": " ]
            }, {
              "r" : "241",
              "s" : [ {
                "value" : [ "SplitOnMatches", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "'1,2three'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'\\\\w,\\\\w+'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "246",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "241",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "244",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "242",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "243",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "1,2three",
            "annotation" : [ ]
          },
          "separatorPattern" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\w,\\w+",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "250",
        "name" : "SplitOnMatchesNoMatch",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesNoMatch", ": " ]
            }, {
              "r" : "259",
              "s" : [ {
                "value" : [ "SplitOnMatches", "(" ]
              }, {
                "r" : "251",
                "s" : [ {
                  "value" : [ "'foobar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "253",
                "s" : [ {
                  "value" : [ "'\\\\d'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "264",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "259",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "262",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "263",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "260",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "261",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "foobar",
            "annotation" : [ ]
          },
          "separatorPattern" : {
            "type" : "Literal",
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\d",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "268",
        "name" : "SplitOnMatchesIsNullFirst",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesIsNullFirst", ": " ]
            }, {
              "r" : "277",
              "s" : [ {
                "r" : "269",
                "value" : [ "SplitOnMatches", "(", "null", ", " ]
              }, {
                "r" : "270",
                "s" : [ {
                  "value" : [ "'\\\\w+'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "283",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "277",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "281",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "282",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "279",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "280",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "As",
            "localId" : "278",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "269",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "separatorPattern" : {
            "type" : "Literal",
            "localId" : "270",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\w+",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "287",
        "name" : "SplitOnMatchesIsNullSecond",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "287",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesIsNullSecond", ": " ]
            }, {
              "r" : "296",
              "s" : [ {
                "value" : [ "SplitOnMatches", "(" ]
              }, {
                "r" : "288",
                "s" : [ {
                  "value" : [ "'12three'" ]
                } ]
              }, {
                "r" : "290",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "302",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "303",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "296",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "300",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "301",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "Literal",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "12three",
            "annotation" : [ ]
          },
          "separatorPattern" : {
            "type" : "As",
            "localId" : "297",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "306",
        "name" : "SplitOnMatchesAllNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "306",
            "s" : [ {
              "value" : [ "", "define ", "SplitOnMatchesAllNull", ": " ]
            }, {
              "r" : "315",
              "s" : [ {
                "r" : "307",
                "value" : [ "SplitOnMatches", "(", "null", ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "resultTypeSpecifier" : {
          "type" : "ListTypeSpecifier",
          "localId" : "322",
          "annotation" : [ ],
          "elementType" : {
            "type" : "NamedTypeSpecifier",
            "localId" : "323",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }
        },
        "expression" : {
          "type" : "SplitOnMatches",
          "localId" : "315",
          "annotation" : [ ],
          "resultTypeSpecifier" : {
            "type" : "ListTypeSpecifier",
            "localId" : "320",
            "annotation" : [ ],
            "elementType" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "321",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          },
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "318",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "stringToSplit" : {
            "type" : "As",
            "localId" : "316",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "307",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "separatorPattern" : {
            "type" : "As",
            "localId" : "317",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "308",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* Length
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ElevenLetters: Length('Hello World')
define NullString: Length(null as String)
*/

module.exports['Length'] = {
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "ElevenLetters",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "ElevenLetters", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "Length", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'Hello World'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Length",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Hello World",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "231",
              "s" : [ {
                "value" : [ "Length", "(" ]
              }, {
                "r" : "225",
                "s" : [ {
                  "r" : "226",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "227",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Length",
          "localId" : "231",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "232",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "226",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "227",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* Upper
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define LowerC: Upper('abcdefg123')
define UpperC: Upper('ABCDEFG123')
define CamelC: Upper('aBcDeFg123')
define NullString: Upper(null)
*/

module.exports['Upper'] = {
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
        "r" : "244",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "LowerC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "LowerC", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "Upper", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'abcdefg123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Upper",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "abcdefg123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "UpperC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "UpperC", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "value" : [ "Upper", "(" ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "'ABCDEFG123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Upper",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDEFG123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CamelC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "CamelC", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "value" : [ "Upper", "(" ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'aBcDeFg123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Upper",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "aBcDeFg123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "244",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "r" : "245",
                "value" : [ "Upper", "(", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Upper",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "251",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* Lower
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define LowerC: Lower('abcdefg123')
define UpperC: Lower('ABCDEFG123')
define CamelC: Lower('aBcDeFg123')
define NullString: Lower(null)
*/

module.exports['Lower'] = {
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
        "r" : "244",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "LowerC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "LowerC", ": " ]
            }, {
              "r" : "220",
              "s" : [ {
                "value" : [ "Lower", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'abcdefg123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Lower",
          "localId" : "220",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "221",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "abcdefg123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "224",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "UpperC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "224",
            "s" : [ {
              "value" : [ "", "define ", "UpperC", ": " ]
            }, {
              "r" : "230",
              "s" : [ {
                "value" : [ "Lower", "(" ]
              }, {
                "r" : "225",
                "s" : [ {
                  "value" : [ "'ABCDEFG123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Lower",
          "localId" : "230",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "231",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDEFG123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "234",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "CamelC",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "234",
            "s" : [ {
              "value" : [ "", "define ", "CamelC", ": " ]
            }, {
              "r" : "240",
              "s" : [ {
                "value" : [ "Lower", "(" ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'aBcDeFg123'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Lower",
          "localId" : "240",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "241",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "aBcDeFg123",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "244",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "244",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "250",
              "s" : [ {
                "r" : "245",
                "value" : [ "Lower", "(", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Lower",
          "localId" : "250",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : {
            "type" : "As",
            "localId" : "251",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* Indexer
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define HelloWorldSix: 'HelloWorld'[6]
define HelloWorldZero: 'HelloWorld'[0]
define HelloWorldTwenty: 'HelloWorld'[20]
define NullString: (null as String)[4]
define NullIndex: 'HelloWorld'[null]
*/

module.exports['Indexer'] = {
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
        "r" : "251",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "HelloWorldSix",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "HelloWorldSix", ": " ]
            }, {
              "r" : "215",
              "s" : [ {
                "r" : "216",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "218",
                "value" : [ "[", "6", "]" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Indexer",
          "localId" : "215",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "219",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "220",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "216",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "218",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "6",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "223",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "HelloWorldZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "223",
            "s" : [ {
              "value" : [ "", "define ", "HelloWorldZero", ": " ]
            }, {
              "r" : "224",
              "s" : [ {
                "r" : "225",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "227",
                "value" : [ "[", "0", "]" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Indexer",
          "localId" : "224",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "228",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "225",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "227",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "HelloWorldTwenty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "HelloWorldTwenty", ": " ]
            }, {
              "r" : "233",
              "s" : [ {
                "r" : "234",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "236",
                "value" : [ "[", "20", "]" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Indexer",
          "localId" : "233",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "237",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "234",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "236",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "20",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "241",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "241",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "242",
              "s" : [ {
                "r" : "243",
                "s" : [ {
                  "value" : [ "(" ]
                }, {
                  "r" : "243",
                  "s" : [ {
                    "r" : "244",
                    "value" : [ "null", " as " ]
                  }, {
                    "r" : "245",
                    "s" : [ {
                      "value" : [ "String" ]
                    } ]
                  } ]
                }, {
                  "value" : [ ")" ]
                } ]
              }, {
                "r" : "246",
                "value" : [ "[", "4", "]" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Indexer",
          "localId" : "242",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "248",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "244",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "245",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "4",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "251",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullIndex",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "251",
            "s" : [ {
              "value" : [ "", "define ", "NullIndex", ": " ]
            }, {
              "r" : "252",
              "s" : [ {
                "r" : "253",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "255",
                "value" : [ "[", "null", "]" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Indexer",
          "localId" : "252",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "257",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "258",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "256",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "255",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* Matches
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define MatchesTrue: Matches('1,2three', '\\d,\\d\\w+')
define MatchesFalse: Matches('three', '\\d')
define MatchesIsNullFirst: Matches(null, '\\w+')
define MatchesIsNullSecond: Matches('12three', null)
define MatchesAllNull: Matches(null, null)
*/

module.exports['Matches'] = {
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
        "r" : "272",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MatchesTrue",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "MatchesTrue", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "Matches", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'1,2three'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'\\\\d,\\\\d\\\\w+'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Matches",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "1,2three",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\d,\\d\\w+",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MatchesFalse",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "MatchesFalse", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "Matches", "(" ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "'three'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "value" : [ "'\\\\d'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Matches",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "three",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\d",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MatchesIsNullFirst",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "MatchesIsNullFirst", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "243",
                "value" : [ "Matches", "(", "null", ", " ]
              }, {
                "r" : "244",
                "s" : [ {
                  "value" : [ "'\\\\w+'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Matches",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "252",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\w+",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MatchesIsNullSecond",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "257",
            "s" : [ {
              "value" : [ "", "define ", "MatchesIsNullSecond", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "Matches", "(" ]
              }, {
                "r" : "258",
                "s" : [ {
                  "value" : [ "'12three'" ]
                } ]
              }, {
                "r" : "260",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Matches",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "12three",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "267",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "272",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "MatchesAllNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "272",
            "s" : [ {
              "value" : [ "", "define ", "MatchesAllNull", ": " ]
            }, {
              "r" : "281",
              "s" : [ {
                "r" : "273",
                "value" : [ "Matches", "(", "null", ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Matches",
          "localId" : "281",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "285",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "282",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "As",
            "localId" : "283",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "274",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

/* PositionOf
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Found: PositionOf('cde', 'abcdefg')
define NotFound: PositionOf('fgh', 'abcdefg')
define NullPattern: PositionOf(null, 'abcdefg')
define NullString: PositionOf('cde', null)
*/

module.exports['PositionOf'] = {
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
        "r" : "257",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Found",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Found", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "PositionOf", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'cde'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'abcdefg'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PositionOf",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "cde",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "abcdefg",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NotFound",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "NotFound", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "PositionOf", "(" ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "'fgh'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "value" : [ "'abcdefg'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PositionOf",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "fgh",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "abcdefg",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NullPattern",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "NullPattern", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "243",
                "value" : [ "PositionOf", "(", "null", ", " ]
              }, {
                "r" : "244",
                "s" : [ {
                  "value" : [ "'abcdefg'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PositionOf",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "As",
            "localId" : "252",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "string" : {
            "type" : "Literal",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "abcdefg",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "257",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "PositionOf", "(" ]
              }, {
                "r" : "258",
                "s" : [ {
                  "value" : [ "'cde'" ]
                } ]
              }, {
                "r" : "260",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "PositionOf",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "cde",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "As",
            "localId" : "267",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* LastPositionOf
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define Found: LastPositionOf('B', 'ABCDEDCBA')    // 7
define NotFound: LastPositionOf('XYZ', 'ABCDE')   // -1
define NullPattern: LastPositionOf(null, 'ABCDE') // null
define NullString: LastPositionOf('ABCDE', null)  // null
*/

module.exports['LastPositionOf'] = {
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
        "r" : "257",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "Found",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "Found", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "LastPositionOf", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'B'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'ABCDEDCBA'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LastPositionOf",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "B",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDEDCBA",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NotFound",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "// 7\n", "define ", "NotFound", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "LastPositionOf", "(" ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "'XYZ'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "value" : [ "'ABCDE'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LastPositionOf",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "XYZ",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDE",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NullPattern",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "// -1\n", "define ", "NullPattern", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "r" : "243",
                "value" : [ "LastPositionOf", "(", "null", ", " ]
              }, {
                "r" : "244",
                "s" : [ {
                  "value" : [ "'ABCDE'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LastPositionOf",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "As",
            "localId" : "252",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "243",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "string" : {
            "type" : "Literal",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDE",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "257",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "257",
            "s" : [ {
              "value" : [ "// null\n", "define ", "NullString", ": " ]
            }, {
              "r" : "266",
              "s" : [ {
                "value" : [ "LastPositionOf", "(" ]
              }, {
                "r" : "258",
                "s" : [ {
                  "value" : [ "'ABCDE'" ]
                } ]
              }, {
                "r" : "260",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "LastPositionOf",
          "localId" : "266",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "268",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "269",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "pattern" : {
            "type" : "Literal",
            "localId" : "258",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "ABCDE",
            "annotation" : [ ]
          },
          "string" : {
            "type" : "As",
            "localId" : "267",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "260",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* Substring
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define World: Substring('HelloWorld', 5)
define Or: Substring('HelloWorld', 7, 2)
define ZeroLength: Substring('HelloWorld', 7, 0)
define StartTooLow: Substring('HelloWorld', -1)
define StartZero: Substring('HelloWorld', 0)
define TooMuchLength: Substring('HelloWorld', 7, 25)
define NegativeLength: Substring('HelloWorld', 7, -1)
define NullString: Substring(null, 5)
define NullStart: Substring('HelloWorld', null)
*/

module.exports['Substring'] = {
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
        "r" : "335",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "World",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "World", ": " ]
            }, {
              "r" : "222",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "217",
                "value" : [ ", ", "5", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "222",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "223",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "227",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "Or",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "227",
            "s" : [ {
              "value" : [ "", "define ", "Or", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "228",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "230",
                "value" : [ ", ", "7", ", ", "2", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "240",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "228",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "230",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "7",
            "annotation" : [ ]
          },
          "length" : {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "2",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "243",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ZeroLength",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "243",
            "s" : [ {
              "value" : [ "", "define ", "ZeroLength", ": " ]
            }, {
              "r" : "253",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "244",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "246",
                "value" : [ ", ", "7", ", ", "0", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "253",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "254",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "255",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "256",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "244",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "246",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "7",
            "annotation" : [ ]
          },
          "length" : {
            "type" : "Literal",
            "localId" : "247",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "259",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "StartTooLow",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "259",
            "s" : [ {
              "value" : [ "", "define ", "StartTooLow", ": " ]
            }, {
              "r" : "269",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "260",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "262",
                "s" : [ {
                  "r" : "263",
                  "value" : [ "-", "1" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "269",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "270",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "271",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "260",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Negate",
            "localId" : "262",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "264",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "263",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "274",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "StartZero",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "274",
            "s" : [ {
              "value" : [ "", "define ", "StartZero", ": " ]
            }, {
              "r" : "282",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "275",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "277",
                "value" : [ ", ", "0", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "282",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "284",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "275",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "277",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "0",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "287",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "TooMuchLength",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "287",
            "s" : [ {
              "value" : [ "", "define ", "TooMuchLength", ": " ]
            }, {
              "r" : "297",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "288",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "290",
                "value" : [ ", ", "7", ", ", "25", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "297",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "298",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "300",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "290",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "7",
            "annotation" : [ ]
          },
          "length" : {
            "type" : "Literal",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "25",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "303",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NegativeLength",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "303",
            "s" : [ {
              "value" : [ "", "define ", "NegativeLength", ": " ]
            }, {
              "r" : "315",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "304",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "306",
                "value" : [ ", ", "7", ", " ]
              }, {
                "r" : "307",
                "s" : [ {
                  "r" : "308",
                  "value" : [ "-", "1" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "315",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "316",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "318",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "306",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "7",
            "annotation" : [ ]
          },
          "length" : {
            "type" : "Negate",
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ {
              "type" : "NamedTypeSpecifier",
              "localId" : "309",
              "name" : "{urn:hl7-org:elm-types:r1}Integer",
              "annotation" : [ ]
            } ],
            "operand" : {
              "type" : "Literal",
              "localId" : "308",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
              "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
              "value" : "1",
              "annotation" : [ ]
            }
          }
        }
      }, {
        "localId" : "321",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "321",
            "s" : [ {
              "value" : [ "", "define ", "NullString", ": " ]
            }, {
              "r" : "329",
              "s" : [ {
                "r" : "322",
                "value" : [ "Substring", "(", "null", ", ", "5", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "329",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "331",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "332",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "As",
            "localId" : "330",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "322",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          },
          "startIndex" : {
            "type" : "Literal",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
            "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
            "value" : "5",
            "annotation" : [ ]
          }
        }
      }, {
        "localId" : "335",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "NullStart",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "335",
            "s" : [ {
              "value" : [ "", "define ", "NullStart", ": " ]
            }, {
              "r" : "344",
              "s" : [ {
                "value" : [ "Substring", "(" ]
              }, {
                "r" : "336",
                "s" : [ {
                  "value" : [ "'HelloWorld'" ]
                } ]
              }, {
                "r" : "338",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "Substring",
          "localId" : "344",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "346",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "347",
            "name" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ]
          } ],
          "stringToSub" : {
            "type" : "Literal",
            "localId" : "336",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "HelloWorld",
            "annotation" : [ ]
          },
          "startIndex" : {
            "type" : "As",
            "localId" : "345",
            "asType" : "{urn:hl7-org:elm-types:r1}Integer",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "338",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }
        }
      } ]
    }
  }
}

/* StartsWith
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define FooBarStartsWithFoo: StartsWith('FooBar', 'Foo')
define FooBarStartsWithBar: StartsWith('FooBar', 'Bar')
define FooBarStartsWithBlank: StartsWith('FooBar', '')
define BlankStartsWithFoo: StartsWith('', 'Foo')
define StartsWithNull: StartsWith('FooBar', null)
define StartsWithNullAsString: StartsWith('FooBar', null as String)
define NullStartsWith: StartsWith(null, 'Foo')
define NullAsStringStartsWith: StartsWith(null as String, 'Foo')
*/

module.exports['StartsWith'] = {
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
        "r" : "315",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarStartsWithFoo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "FooBarStartsWithFoo", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarStartsWithBar",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "FooBarStartsWithBar", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
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
          "type" : "StartsWith",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarStartsWithBlank",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "FooBarStartsWithBlank", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "243",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "245",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "BlankStartsWithFoo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "BlankStartsWithFoo", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "259",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StartsWithNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "StartsWithNull", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "r" : "273",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "281",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "280",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "285",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "StartsWithNullAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "285",
            "s" : [ {
              "value" : [ "", "define ", "StartsWithNullAsString", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "286",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "288",
                "s" : [ {
                  "r" : "289",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "290",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "296",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "300",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullStartsWith",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "300",
            "s" : [ {
              "value" : [ "", "define ", "NullStartsWith", ": " ]
            }, {
              "r" : "309",
              "s" : [ {
                "r" : "301",
                "value" : [ "StartsWith", "(", "null", ", " ]
              }, {
                "r" : "302",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "309",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "312",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "310",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "301",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "302",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "315",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullAsStringStartsWith",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "315",
            "s" : [ {
              "value" : [ "", "define ", "NullAsStringStartsWith", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "value" : [ "StartsWith", "(" ]
              }, {
                "r" : "316",
                "s" : [ {
                  "r" : "317",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "318",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "319",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "StartsWith",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "326",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "327",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* EndsWith
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define FooBarEndsWithBar: EndsWith('FooBar', 'Bar')
define FooBarEndsWithFoo: EndsWith('FooBar', 'Foo')
define FooBarEndsWithBlank: EndsWith('FooBar', '')
define BlankEndsWithFoo: EndsWith('', 'Foo')
define EndsWithNull: EndsWith('FooBar', null)
define EndsWithNullAsString: EndsWith('FooBar', null as String)
define NullEndsWith: EndsWith(null as String, 'Foo')
define NullAsStringEndsWith: EndsWith(null as String, 'Foo')
*/

module.exports['EndsWith'] = {
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
        "r" : "315",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarEndsWithBar",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "FooBarEndsWithBar", ": " ]
            }, {
              "r" : "223",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
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
          "type" : "EndsWith",
          "localId" : "223",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "224",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "225",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "228",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarEndsWithFoo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "228",
            "s" : [ {
              "value" : [ "", "define ", "FooBarEndsWithFoo", ": " ]
            }, {
              "r" : "237",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "229",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "231",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "237",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "238",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "239",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "229",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "231",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "242",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "FooBarEndsWithBlank",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "242",
            "s" : [ {
              "value" : [ "", "define ", "FooBarEndsWithBlank", ": " ]
            }, {
              "r" : "251",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "243",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "245",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "251",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "252",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "253",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "243",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "245",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "256",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "BlankEndsWithFoo",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "256",
            "s" : [ {
              "value" : [ "", "define ", "BlankEndsWithFoo", ": " ]
            }, {
              "r" : "265",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "257",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "259",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "265",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "266",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "267",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "257",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "259",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "270",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EndsWithNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "270",
            "s" : [ {
              "value" : [ "", "define ", "EndsWithNull", ": " ]
            }, {
              "r" : "279",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "r" : "273",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "279",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "281",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "280",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "273",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "285",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "EndsWithNullAsString",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "285",
            "s" : [ {
              "value" : [ "", "define ", "EndsWithNullAsString", ": " ]
            }, {
              "r" : "295",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "286",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "288",
                "s" : [ {
                  "r" : "289",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "290",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "295",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "296",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "297",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "286",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "288",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "289",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "290",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          } ]
        }
      }, {
        "localId" : "300",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullEndsWith",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "300",
            "s" : [ {
              "value" : [ "", "define ", "NullEndsWith", ": " ]
            }, {
              "r" : "310",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "301",
                "s" : [ {
                  "r" : "302",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "303",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "304",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "310",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "311",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "312",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "301",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "302",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "303",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "304",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "315",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
        "name" : "NullAsStringEndsWith",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "315",
            "s" : [ {
              "value" : [ "", "define ", "NullAsStringEndsWith", ": " ]
            }, {
              "r" : "325",
              "s" : [ {
                "value" : [ "EndsWith", "(" ]
              }, {
                "r" : "316",
                "s" : [ {
                  "r" : "317",
                  "value" : [ "null", " as " ]
                }, {
                  "r" : "318",
                  "s" : [ {
                    "value" : [ "String" ]
                  } ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "319",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "EndsWith",
          "localId" : "325",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "326",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "327",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "316",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "strict" : false,
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "317",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            },
            "asTypeSpecifier" : {
              "type" : "NamedTypeSpecifier",
              "localId" : "318",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
              "name" : "{urn:hl7-org:elm-types:r1}String",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "319",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          } ]
        }
      } ]
    }
  }
}

/* ReplaceMatches
library TestSnippet version '1'
using Simple version '1.0.0'
context Patient
define ReplaceOne: ReplaceMatches('FooBar', 'Bar', 'Baz')
define ReplaceMany: ReplaceMatches('FooBarFooBarFooBar', 'Bar', 'Baz')
define ReplaceCapital: ReplaceMatches('Tattle', 'T', 'R')
define ReplaceDiacritical: ReplaceMatches('Cafè', 'è', 'é')
define ReplaceUnicode: ReplaceMatches('Turn that frown 🙁 upside down! 😃', '🙁', '😃')
define ReplaceSpace: ReplaceMatches('(123) 456 7890', '\\s', '-')
define ReplaceEmpty: ReplaceMatches('FooBar', '', '.')
define ReplaceMatchGroups: ReplaceMatches('Foo[123]', 'Foo\\[(\\d+)]', 'Bar[$1]')
define ReplaceNone: ReplaceMatches('Foo', 'Bar', 'Baz')
define ReplaceArgumentIsNull: ReplaceMatches(null, 'Bar', 'Baz')
define ReplacePatternIsNull: ReplaceMatches('Foo', null, 'Baz')
define ReplaceSubstitutionIsNull: ReplaceMatches('Foo', 'Bar', null)
*/

module.exports['ReplaceMatches'] = {
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
        "r" : "414",
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
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceOne",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "214",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceOne", ": " ]
            }, {
              "r" : "226",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "215",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "217",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "219",
                "s" : [ {
                  "value" : [ "'Baz'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "226",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "227",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "228",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "229",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "215",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "217",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "219",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Baz",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "232",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceMany",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "232",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceMany", ": " ]
            }, {
              "r" : "244",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "233",
                "s" : [ {
                  "value" : [ "'FooBarFooBarFooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "235",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "237",
                "s" : [ {
                  "value" : [ "'Baz'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "244",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "245",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "246",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "247",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "233",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBarFooBarFooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "235",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "237",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Baz",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "250",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceCapital",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "250",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceCapital", ": " ]
            }, {
              "r" : "262",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "251",
                "s" : [ {
                  "value" : [ "'Tattle'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "253",
                "s" : [ {
                  "value" : [ "'T'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "255",
                "s" : [ {
                  "value" : [ "'R'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "262",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "263",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "264",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "265",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "251",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Tattle",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "253",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "T",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "255",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "R",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "268",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceDiacritical",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "268",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceDiacritical", ": " ]
            }, {
              "r" : "280",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "269",
                "s" : [ {
                  "value" : [ "'Cafè'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "271",
                "s" : [ {
                  "value" : [ "'è'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "273",
                "s" : [ {
                  "value" : [ "'é'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "280",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "281",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "282",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "283",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "269",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Cafè",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "271",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "è",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "273",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "é",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "286",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceUnicode",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "286",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceUnicode", ": " ]
            }, {
              "r" : "298",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "287",
                "s" : [ {
                  "value" : [ "'Turn that frown 🙁 upside down! 😃'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "289",
                "s" : [ {
                  "value" : [ "'🙁'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "291",
                "s" : [ {
                  "value" : [ "'😃'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "298",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "299",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "300",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "301",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "287",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Turn that frown 🙁 upside down! 😃",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "289",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "🙁",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "291",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "😃",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "304",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceSpace",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "304",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceSpace", ": " ]
            }, {
              "r" : "316",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "305",
                "s" : [ {
                  "value" : [ "'(123) 456 7890'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "307",
                "s" : [ {
                  "value" : [ "'\\\\s'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "309",
                "s" : [ {
                  "value" : [ "'-'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "316",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "317",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "318",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "319",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "305",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "(123) 456 7890",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "307",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "\\s",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "309",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "-",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "322",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceEmpty",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "322",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceEmpty", ": " ]
            }, {
              "r" : "334",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "323",
                "s" : [ {
                  "value" : [ "'FooBar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "325",
                "s" : [ {
                  "value" : [ "''" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "327",
                "s" : [ {
                  "value" : [ "'.'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "334",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "335",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "336",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "337",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "323",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "FooBar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "325",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "327",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : ".",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "340",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceMatchGroups",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "340",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceMatchGroups", ": " ]
            }, {
              "r" : "352",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "341",
                "s" : [ {
                  "value" : [ "'Foo[123]'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "343",
                "s" : [ {
                  "value" : [ "'Foo\\\\[(\\\\d+)]'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "345",
                "s" : [ {
                  "value" : [ "'Bar[$1]'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "352",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "353",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "354",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "355",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "341",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo[123]",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "343",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo\\[(\\d+)]",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "345",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar[$1]",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "358",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceNone",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "358",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceNone", ": " ]
            }, {
              "r" : "370",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "359",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "361",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "363",
                "s" : [ {
                  "value" : [ "'Baz'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "370",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "371",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "372",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "373",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "359",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "361",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "363",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Baz",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "376",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceArgumentIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "376",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceArgumentIsNull", ": " ]
            }, {
              "r" : "388",
              "s" : [ {
                "r" : "377",
                "value" : [ "ReplaceMatches", "(", "null", ", " ]
              }, {
                "r" : "378",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "380",
                "s" : [ {
                  "value" : [ "'Baz'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "388",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "390",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "391",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "392",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "As",
            "localId" : "389",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "377",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "378",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "380",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Baz",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "395",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplacePatternIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "395",
            "s" : [ {
              "value" : [ "", "define ", "ReplacePatternIsNull", ": " ]
            }, {
              "r" : "407",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "396",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "r" : "398",
                "value" : [ ", ", "null", ", " ]
              }, {
                "r" : "399",
                "s" : [ {
                  "value" : [ "'Baz'" ]
                } ]
              }, {
                "value" : [ ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "407",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "409",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "410",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "411",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "396",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "408",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "398",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          }, {
            "type" : "Literal",
            "localId" : "399",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Baz",
            "annotation" : [ ]
          } ]
        }
      }, {
        "localId" : "414",
        "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
        "name" : "ReplaceSubstitutionIsNull",
        "context" : "Patient",
        "accessLevel" : "Public",
        "annotation" : [ {
          "type" : "Annotation",
          "t" : [ ],
          "s" : {
            "r" : "414",
            "s" : [ {
              "value" : [ "", "define ", "ReplaceSubstitutionIsNull", ": " ]
            }, {
              "r" : "426",
              "s" : [ {
                "value" : [ "ReplaceMatches", "(" ]
              }, {
                "r" : "415",
                "s" : [ {
                  "value" : [ "'Foo'" ]
                } ]
              }, {
                "value" : [ ", " ]
              }, {
                "r" : "417",
                "s" : [ {
                  "value" : [ "'Bar'" ]
                } ]
              }, {
                "r" : "419",
                "value" : [ ", ", "null", ")" ]
              } ]
            } ]
          }
        } ],
        "expression" : {
          "type" : "ReplaceMatches",
          "localId" : "426",
          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
          "annotation" : [ ],
          "signature" : [ {
            "type" : "NamedTypeSpecifier",
            "localId" : "428",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "429",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          }, {
            "type" : "NamedTypeSpecifier",
            "localId" : "430",
            "name" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ]
          } ],
          "operand" : [ {
            "type" : "Literal",
            "localId" : "415",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Foo",
            "annotation" : [ ]
          }, {
            "type" : "Literal",
            "localId" : "417",
            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
            "valueType" : "{urn:hl7-org:elm-types:r1}String",
            "value" : "Bar",
            "annotation" : [ ]
          }, {
            "type" : "As",
            "localId" : "427",
            "asType" : "{urn:hl7-org:elm-types:r1}String",
            "annotation" : [ ],
            "signature" : [ ],
            "operand" : {
              "type" : "Null",
              "localId" : "419",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Any",
              "annotation" : [ ]
            }
          } ]
        }
      } ]
    }
  }
}

